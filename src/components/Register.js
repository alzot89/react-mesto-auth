
function Register() {

    return (
        <section className="register">
            <h2 className="register__title">Регистрация</h2>
            <form className="register__form">
                <input className="register__input register__input_type_email" type="email" placeholder="Email"></input>
                <input className="register__input register__input_type_password" placeholder="Пароль"></input>
                <button className="register__button">Зарегистрироваться</button>
            </form>
            <p className="register__enter">Уже зарегистрированы? Войти</p>
        </section>
    )
}

export default Register