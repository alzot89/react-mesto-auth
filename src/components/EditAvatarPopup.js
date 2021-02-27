import { useRef, useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm';


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, isLoading }) {
    const avatarRef = useRef();
    const [error, setError] = useState('');
    const [validity, setValidity] = useState(true)

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar(avatarRef.current.value);
        avatarRef.current.value = ''
    }

    function handleChange(e) {
        setError(avatarRef.current.validationMessage);
        setValidity(e.target.validity.valid)
    }

    useEffect(() => {
        if (isOpen) {
            avatarRef.current.value = '';
            setError('');
            setValidity(true)
        }
    }, [isOpen])

    return (
        <PopupWithForm name='avatar' title='Обновить аватар' button={isLoading ? 'Сохранение...' : 'Сохранить'} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
            <div className="popup__input-container">
                <input id="avatar-input" className={`popup__input popup__input_type_avatar ${!validity && 'popup__input_state_invalid'} `} type="url" name="avatar"
                    placeholder="Ссылка на картинку" ref={avatarRef} required onChange={handleChange} />
                <span id="avatar-input-error" className="error">{error}</span>
            </div>
        </PopupWithForm>
    )

}

export default EditAvatarPopup