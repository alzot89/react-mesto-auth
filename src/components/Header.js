import logoPath from '../images/header_logo.svg';
import { Link, Route } from 'react-router-dom';
import { useRef } from 'react';

function Header({ email, onSignOut }) {

    const buttonRef = useRef();
    const menuRef = useRef();
    const headerRef = useRef();

    function openMenu() {
        buttonRef.current.classList.toggle('menu__button_open');
        menuRef.current.classList.toggle('menu__list_open');
        headerRef.current.classList.toggle('header_active');
    }

    return (
        <header className="header" ref={headerRef}>
            <img className="header__logo" src={logoPath} alt="картинка: логотип" />
            <Route path="/sign-in">
                <Link className="header__link" to="/sign-up">Регистрация</Link>
            </Route>
            <Route path="/sign-up">
                <Link className="header__link" to="/sign-in">Вход</Link>
            </Route>
            <Route exact path="/">
                <nav className="menu">
                    <button className="menu__button" ref={buttonRef} onClick={openMenu}></button>
                    <ul className="menu__list" ref={menuRef}>
                        <li>
                            <p className="header__useremail">{email}</p>
                        </li>
                        <li>
                            <button className="header__logout" type="button" onClick={onSignOut}>Выйти</button>
                        </li>
                    </ul>
                </nav>
            </Route>
        </header >
    )
}

export default Header;