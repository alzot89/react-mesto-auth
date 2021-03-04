import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register({ onRegister }) {

    const initialCredential = { email: '', password: '' }
    const [credential, setCredential] = useState(initialCredential);
    const [validity, setValidity] = useState({ email: true, password: true });
    const [error, setError] = useState(initialCredential);

    function handleChange(e) {
        const name = e.target.name;
        setCredential((prevValue) => ({
            ...prevValue,
            [name]: e.target.value
        }));
        setError((prevValue) => ({
            ...prevValue,
            [name]: e.target.validationMessage
        }));
        setValidity((prevValue) => ({
            ...prevValue,
            [name]: e.target.validity.valid
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(credential);
        setCredential(initialCredential);
        setError(initialCredential);
        setValidity((prevValue) => ({
            ...prevValue,
            email: true,
            password: true
        }))
    }

    return (
        <section className="register">
            <h2 className="register__title">Регистрация</h2>
            <form className="popup__form popup__form_type_login" name="login" onSubmit={handleSubmit} >
                <div className="popup__input-container">
                    <input id="name-input" className={`popup__input popup__input_type_email ${!validity.email && 'popup__input_state_invalid'} `} type="email" name="email" value={credential.email} placeholder="Email" required onChange={handleChange} />
                    <span id="email-input-error" className="error">{error.email}</span>
                </div>
                <div className="popup__input-container">
                    <input id="about-input" className={`popup__input popup__input_type_password ${!validity.password && 'popup__input_state_invalid'} `} type="password" name="password" value={credential.password} placeholder="Пароль" required onChange={handleChange} />
                    <span id="password-input-error" className="error">{error.password}</span>
                </div>
                <button className="button popup__save popup__save_type_login" >Зарегистрироваться</button>
            </form>
            <p className="register__enter">Уже зарегистрированы? <Link className="register__link" to="/react-mesto-auth/sign-in">Войти</Link></p>
        </section>
    )
}

export default Register