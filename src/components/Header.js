import logoPath from '../images/header_logo.svg';
import { Link, Route } from 'react-router-dom';
import { useState } from 'react'

function Header({ email }) {

    const [isActive, setIsActive] = useState(false);

    function showNavBar() {
        setIsActive(true)
    }

    return (
        <header className="header">
            <img className="header__logo" src={logoPath} alt="картинка: логотип" />
            <Route path="/sign-in">
                <Link className="header__link" to="/sign-up">Регистрация</Link>
            </Route>
            <Route path="/sign-up">
                <Link className="header__link" to="/sign-in">Вход</Link>
            </Route>
            <Route path="/main">
                <button className="header__burger" onClick={showNavBar}></button>
                <div className={`header__navbar ${isActive && 'header__navbar_active'}`}>
                    <p className="header__useremail">{email}</p>
                    <Link className="header__link" to="/sign-in">Выйти</Link>
                </div>
            </Route>
        </header>
    )
}

export default Header;