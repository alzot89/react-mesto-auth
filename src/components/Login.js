import { useState } from 'react';
import * as Auth from './Auth';

function Login({ history, handleLogin }) {

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
        if (!credential.email || !credential.password) {
            return
        }
        Auth.authorize(credential)
            .then((data) => {
                if (data.token) {
                    setCredential(
                        (prevValue) => ({
                            ...prevValue,
                            email: '',
                            password: ''
                        }));
                }
                handleLogin();
            })
            .then(() => {
                history.push('/main');
            })
            .catch(err => console.log(err));
    }

    return (
        <section className="login">
            <h2 className="login__title">Вход</h2>
            <form className="login__form" onSubmit={handleSubmit}>
                <input className="login__input login__input_type_email" type="email" value={credential.email} name="email" placeholder="Email" onChange={handleChange}></input>
                <input className="login__input login__input_type_password" type="password" value={credential.password} name="password" placeholder="Пароль" onChange={handleChange}></input>
                <button className="login__button">Войти</button>
            </form>
        </section>
    )
}

export default Login