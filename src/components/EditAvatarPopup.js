import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const [validity, setValidity] = useState(true);
    const [isFormValid, setFormValid] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(inputValue);
    }

    function handleChange(e) {
        const input = e.target;
        setInputValue(input.value)
        setError(input.validationMessage);
        setValidity(input.validity.valid);
        setFormValid(input.closest('form').checkValidity());
    }

    useEffect(() => {
        if (isOpen) {
            setInputValue('');
            setError('');
            setValidity(true);
            setFormValid(false);
        }
    }, [isOpen, onClose])

    return (
        <PopupWithForm name='avatar' title='Обновить аватар' button={isLoading ? 'Сохранение...' : 'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit} isFormValid={isFormValid}>
            <div className="popup__input-container">
                <input id="avatar-input" className={`popup__input popup__input_type_avatar ${!validity && 'popup__input_state_invalid'} `} type="url" name="avatar"
                    placeholder="Ссылка на картинку" value={inputValue} required onChange={handleChange} />
                <span id="avatar-input-error" className="error">{error}</span>
            </div>
        </PopupWithForm>
    )

}

export default EditAvatarPopup