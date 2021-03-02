
import { useEffect } from 'react';

function InfoTooltip({ isOpen, onClose, imgPath, message }) {

    function handleOverlayClose(evt) {
        if (evt.target.classList.contains('popup')) { onClose() }
    }
    // eslint-disable-next-line
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
    }, [isOpen])

    return (
        <div className={`popup ${isOpen && 'popup_opened'}`} onMouseDown={handleOverlayClose}>
            <div className="popup__container popup__container_type_indicator">
                <button className="button popup__close popup__close_type_indicator" onClick={onClose}></button>
                <img className="popup__indicator" src={imgPath} alt="индикатор"></img>
                <h3 className="popup__message">{message}</h3>
            </div>
        </div>
    )
}

export default InfoTooltip