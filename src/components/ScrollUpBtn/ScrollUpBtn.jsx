import upArrow from './icons/up-arrow.svg';
import s from './ScrollUpBtn.module.sass';

const ScrollUpBtn = () => {
    const scrollUp = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <img src={upArrow} alt='Scroll Up Btn' className={s.scrollUp} onClick={scrollUp} />
}

export default ScrollUpBtn;