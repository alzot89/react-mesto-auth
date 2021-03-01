import { Link } from 'react-router-dom';
import { useState } from 'react';

function Register({ onRegister }) {

    const initialCredential = { email: '', password: '' }
    const [credential, setCredential] = useState(initialCredential)

    function handleChange(e) {
        const { name, value } = e.target;
        setCredential((prevValue) => ({
            ...prevValue,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        onRegister(credential);
        setCredential(initialCredential);
    }

    return (
        <section className="register">
            <h2 className="register__title">Регистрация</h2>
            <form className="register__form" onSubmit={handleSubmit}>
                <input className="register__input register__input_type_email" type="email" value={credential.email} name="email" placeholder="Email" onChange={handleChange}></input>
                <input className="register__input register__input_type_password" type="password" value={credential.password} name="password" placeholder="Пароль" onChange={handleChange}></input>
                <button className="register__button">Зарегистрироваться</button>
            </form>
            <p className="register__enter">Уже зарегистрированы? <Link className="register__link" to="/react-mesto-auth/sign-in">Войти</Link></p>
        </section>
    )
}

export default Register