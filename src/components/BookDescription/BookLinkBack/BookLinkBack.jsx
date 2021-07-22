import { useHistory } from 'react-router-dom'

import iconBack from './icons/left-arrow.svg'
import s from './BookLinkBack.module.sass';

const BookLinkBack = () => {

    const history = useHistory()
    const handleGoBack = (e) => {
        e.preventDefault();
        history.goBack()
    }

    return (
        <>
            <a href="#" onClick={handleGoBack} className={s.link}>
                <img src={iconBack} alt="Back icon" className={s.link__icon} />
                <span className={s.link__text}>Go Back</span>
            </a>
        </>
    );
}

export default BookLinkBack;