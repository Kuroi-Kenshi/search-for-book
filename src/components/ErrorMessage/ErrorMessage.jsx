import PropTypes from 'prop-types';
import s from './ErrorMessage.module.sass';

const ErrorMessage = ({ error }) => {
    return (
        <div className={s.error}>
            <p className={s.error__container}>
                <strong className={s.error__message}>Данные с сервера не удалось получить!</strong>
                <strong className={s.error__type}>{`Ошибка: ${error}`}</strong>
            </p>
        </div>
    );
}

ErrorMessage.propTypes = {
    error: PropTypes.string
}

export default ErrorMessage;