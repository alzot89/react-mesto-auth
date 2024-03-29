import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm'

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {

    const initialValue = {
        name: '',
        link: ''
    }
    const [inputValue, setInputValue] = useState(initialValue)
    const [error, setError] = useState({});
    const [validity, setValidity] = useState({});
    const [isFormValid, setFormValid] = useState(false);


    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: inputValue.name,
            link: inputValue.link
        })
    }

    // eslint-disable-next-line
    useEffect(() => {
        if (isOpen) {
            setInputValue(initialValue);
            setError(initialValue)
            setValidity({
                name: true,
                link: true
            });
            setFormValid(false);
        }
    }, [isOpen, onClose])

    function handleChange(e) {
        const input = e.target;
        const name = e.target.name
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
        <PopupWithForm name='add' title='Новое место' button={isLoading ? 'Создание...' : 'Создать'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isFormValid={isFormValid}>
            <>
                <div className="popup__input-container">
                    <input id="image-input" className={`popup__input popup__input_type_image ${!validity.name && 'popup__input_state_invalid'} `} type="text" name="name"
                        value={inputValue.name} placeholder="Название" minLength="2" maxLength="30" required onChange={handleChange} />
                    <span id="image-input-error" className="error">{error.name}</span>
                </div>
                <div className="popup__input-container">
                    <input id="link-input" className={`popup__input popup__input_type_link ${!validity.link && 'popup__input_state_invalid'} `} type="url" name="link" value={inputValue.link}
                        placeholder="Ссылка на картинку" required onChange={handleChange} />
                    <span id="link-input-error" className="error">{error.link}</span>
                </div>
            </>
        </PopupWithForm>
    )
}

export default AddPlacePopup