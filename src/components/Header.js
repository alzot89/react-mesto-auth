import logoPath from '../images/header_logo.svg';
import { Link, Route } from 'react-router-dom';

function Header() {

    return (
        <header className="header">
            <img className="header__logo" src={logoPath} alt="картинка: логотип" />
            <Route path="/sign-in">
                <Link className="header__link" to="/sign-up">Регистрация</Link>
            </Route>
            <Route path="/sign-up">
                <Link className="header__link" to="/sign-in">Вход</Link>
            </Route>
        </header>
    )
}

export default Header;