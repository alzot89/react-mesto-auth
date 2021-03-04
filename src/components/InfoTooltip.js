
import { useEffect } from 'react';
import okImage from '../images/OK.svg';
import nokImage from '../images/NOK.svg';
import Spin from '../images/Spin.svg'

function InfoTooltip({ isOpen, onClose, registered, isLoading }) {

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
                {isLoading
                    ? (<img src={Spin} alt="spin" ></img>)
                    : (
                        <>
                            <button className="button popup__close popup__close_type_indicator" onClick={onClose}></button>
                            <img className="popup__indicator" src={registered ? okImage : nokImage} alt="индикатор"></img>
                            <h3 className="popup__message">{registered ? 'Вы успешно зарегистировались!' : 'Что-то пошло не так! Попробуйте еще раз.'}</h3>

                        </>
                    )}
            </div>
        </div>
    )
}

export default InfoTooltip