
import { memo } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './BookCard.module.sass';

const BookCard = ({ id, authors, categories, imageLink, title }) => {

    return (
        <>
            <li>
                <Link to={`/book/${id}`}>
                    <div className={s.bookCard}>
                        {imageLink ? <img src={imageLink} alt="Book img" className={s.bookCard__img} /> : <div className={s.bookCard__noImg}></div>}
                        <div className={s.bookCard__descr}>
                            <span className={s.bookCard__category}>{categories}</span>
                            <h2 className={s.bookCard__name}>{title}</h2>
                            <span className={s.bookCard__authors}>{authors && authors.join(', ')}</span>
                        </div>
                    </div>
                </Link>
            </li>
        </>
    );
}

BookCard.propTypes = {
    id: PropTypes.string,
    authors: PropTypes.array,
    categories: PropTypes.array,
    imageLink: PropTypes.string,
    title: PropTypes.string,
}

export default memo(BookCard);