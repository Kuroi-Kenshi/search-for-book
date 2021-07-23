import PropTypes from 'prop-types';

import s from './Loader.module.sass';

const Loader = ({ small }) => <div className={`${small ? s.smallLoader : s.bigLoader}`}><div></div><div></div></div>

Loader.propTypes = {
    small: PropTypes.bool
}

export default Loader;