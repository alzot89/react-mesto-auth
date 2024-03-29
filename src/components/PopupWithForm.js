import { useEffect } from 'react'

function PopupWithForm({ name, title, button, isOpen, onClose, children, onSubmit, isFormValid }) {

    function handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup')) { onClose() }
    }

    useEffect(() => {
        if (isOpen) {
            const onKeypress = (evt) => {
                if (evt.key === 'Escape') {
                    onClose()
                }
            }
            document.addEventListener('keydown', onKeypress)
            return () => {
                document.removeEventListener('keydown', onKeypress)
            }
        }
    }, [isOpen, onClose])

    return (
        <div className={`popup popup_type_${name} ${isOpen && 'popup_opened'}`} onMouseDown={handleOverlayClose}>
            <div className={`popup__container popup__container_type_${name}`}>
                <button className={`button popup__close popup__close_type${name}`} type="button" aria-label="кнопка: закрыть" onClick={onClose}></button>
                <h2 className="popup__title">{title}</h2>
                <form className={`popup__form popup__form_type_${name}`} name={name} onSubmit={onSubmit} >
                    {children}
                    <button className={`button popup__save popup__save_type_${name} ${!isFormValid && 'popup__save_invalid'}`} aria-label="кнопка: Сохранить">{button}</button>
                </form>
            </div>
        </div>
    )
}


export default PopupWithForm