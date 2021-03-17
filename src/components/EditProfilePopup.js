import { useState, useContext, useEffect } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({ isOpen, onClose, onUpdateUser, isLoading }) {
    const initialValue = {
        name: '',
        description: ''
    }
    const currentUser = useContext(CurrentUserContext);
    const [inputValue, setInputValue] = useState(initialValue)
    const [error, setError] = useState({});
    const [validity, setValidity] = useState({});
    const [isFormValid, setFormValid] = useState(true);

    // eslint-disable-next-line
    useEffect(() => {
        if (isOpen) {
            setInputValue((prevValue) => ({
                ...prevValue,
                name: currentUser.name,
                description: currentUser.about
            }))
            setError(initialValue)
            setValidity({
                name: true,
                description: true
            });
            setFormValid(true)
        }
    }, [isOpen, onClose, currentUser])

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
            name: inputValue.name,
            about: inputValue.description
        });
    }

    function handleInputChange(e) {
        const input = e.target;
        const name = e.target.name;
        setInputValue((prevValue) => ({
            ...prevValue,
            [name]: e.target.value
        }))
        setError((prevValue) => ({
            ...prevValue,
            [name]: e.target.validationMessage
        }))
        setValidity((prevValue) => ({
            ...prevValue,
            [name]: e.target.validity.valid
        }))
        setFormValid(input.closest('form').checkValidity())
    }


    return (
        <PopupWithForm name='edit' title='Редактировать профиль' button={isLoading ? 'Сохранение...' : 'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isFormValid={isFormValid}>
            <>
                <div className="popup__input-container">
                    <input id="name-input" className={`popup__input popup__input_type_name ${!validity.name && 'popup__input_state_invalid'} `} type="text" maxLength="40"
                        minLength="2" name="name" value={inputValue.name} placeholder="Имя" required onChange={handleInputChange} />
                    <span id="name-input-error" className="error">{error.name}</span>
                </div>
                <div className="popup__input-container">
                    <input id="about-input" className={`popup__input popup__input_type_about ${!validity.description && 'popup__input_state_invalid'} `} type="text" maxLength="200"
                        minLength="2" name="description" value={inputValue.description} placeholder="О себе" required onChange={handleInputChange} />
                    <span id="about-input-error" className="error">{error.description}</span>
                </div>
            </>
        </PopupWithForm>
    )
}

export default EditProfilePopup