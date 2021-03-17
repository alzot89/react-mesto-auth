import Header from './Header';
import Register from './Register';
import Login from './Login';
import * as auth from '../utils/auth';
import Main from './Main';
import Footer from './Footer';
import AddPlacePopup from './AddPlacePopup';
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import ImagePopup from './ImagePopup';
import InfoTooltip from './InfoTooltip';
import ConfirmPopup from './ConfirmPopup';
import { useState, useEffect } from 'react';
import api from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { Route, Switch, useHistory } from 'react-router-dom';
import ProtectedRoute from "./ProtectedRoute";

function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [isConfirmPopupOpen, setConfirmPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({
    name: '',
    about: '',
    avatar: ''
  });
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [registered, setRegistered] = useState(false)
  const [email, setEmail] = useState('');
  const history = useHistory();

  function handleRegister(credential) {
    setIsLoading(true)
    auth.register(credential)
      .then((res) => {
        if (res) {
          setRegistered(true);
          setInfoTooltipOpen(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setRegistered(false)
        setInfoTooltipOpen(true);
      })
      .finally(() => setIsLoading(false))
  }

  function handleLogin(credential) {
    if (!credential.email || !credential.password) {
      return
    }
    auth.authorize(credential)
      .then((data) => {
        if (data.token) {
          setEmail(credential.email);
          setLoggedIn(true);
        }
      })
      .then(() => { history.push('/') })
      .catch((err) => {
        console.log(err)
      });
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    history.push('/sign-in');
    setEmail('');
  }

  function closeInfoTooltip() {
    setInfoTooltipOpen(false);
    if (registered === true) {
      history.push('/sign-in');
    }
  }

  useEffect(() => {
    if (localStorage.getItem('jwt')) {
      const jwt = localStorage.getItem('jwt');

      if (jwt) {
        auth.checkToken(jwt)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              setEmail(res.data.email);
            }
          })
          .then(() => { history.push('/') })
          .catch((err) => { console.log(err) })
      }
    }
  }, [history])

  useEffect(() => {
    setIsLoading(true);
    Promise.all([api.getUserData(), api.getCardsData()])
      .then((data) => {
        setCurrentUser(data[0]);
        setCards(data[1])
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleCardDelete() {
    api.deleteCard(selectedCard._id)
      .then(() => {
        const newCards = cards.filter((c) => { return !(c._id === selectedCard._id) && c });
        setCards(newCards)
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
    setImagePopupOpen(true)
  }

  function handleUpdateUser(userData) {
    setIsLoading(true)
    api.changeUserData(userData)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleUpdateAvatar(avatar) {
    setIsLoading(true)
    api.changeAvatar(avatar)
      .then((data) => {
        setCurrentUser(data);
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleAddPlaceSubmit(newCard) {
    setIsLoading(true)
    api.setCardData(newCard)
      .then((data) => {
        setCards([data, ...cards])
        closeAllPopups()
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleConfirmDeletion(card) {
    setConfirmPopupOpen(true);
    setSelectedCard(card)
  }

  function closeAllPopups() {
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({});
    setImagePopupOpen(false);
    setConfirmPopupOpen(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header email={email} onSignOut={handleLogout} />
        <Switch>
          <Route path="/sign-up">
            <Register onRegister={handleRegister} />
          </Route >
          <Route path="/sign-in">
            <Login onLogin={handleLogin} history={history} />
          </Route >
          <ProtectedRoute
            path="/"
            loggedIn={loggedIn}
            component={Main}
            onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick} isLoading={isLoading} cards={cards} onCardLike={handleCardLike} onCardDelete={handleConfirmDeletion}
          />
        </Switch>
        <Footer />
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} isLoading={isLoading} />
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} isLoading={isLoading} />
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} isLoading={isLoading} />
        <ConfirmPopup isOpen={isConfirmPopupOpen} onClose={closeAllPopups} onConfirmDeletion={handleCardDelete} />
        <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} />
        <InfoTooltip isOpen={isInfoTooltipOpen} onClose={closeInfoTooltip} registered={registered} isLoading={isLoading} />
      </div >
    </CurrentUserContext.Provider >
  );
}

export default App;
