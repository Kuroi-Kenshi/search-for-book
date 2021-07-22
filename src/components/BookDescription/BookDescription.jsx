import { useState, useEffect } from 'react'
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';
import { getData } from '@utils/network';
import { getUrl } from '@utils/getUrl';
import BookLinkBack from './BookLinkBack'
import s from './BookDescription.module.sass';

const BookDescription = ({ match }) => {
    const [bookData, setBookData] = useState(null)
    const id = match.params.id
    const url = getUrl(null, null, id)

    useEffect(() => {
        getData(url).then(data => setBookData(data.volumeInfo))

    }, [])
    return (
        <>
            <section className={s.bookDescription}>
                <div className={s.wrapper} >
                    <div className={s.bookDescription__img} >
                        {bookData?.imageLinks ? <img src={bookData?.imageLinks?.thumbnail} alt="Book img" />
                            : <div className={s.bookDescription__noImg}></div>}
                    </div>
                    <div className={s.bookDescription__text}>
                        <span className={s.bookDescription__category}>{bookData?.categories?.join(', ')}</span>
                        <h2 className={s.bookDescription__name}>{bookData?.title}</h2>
                        <span className={s.bookDescription__authors}>{bookData?.authors.join(', ')}</span>
                        <div className={s.bookDescription__descr}>
                            {ReactHtmlParser(bookData?.description)}
                        </div>
                    </div>
                    <div className={s.goBackBtn}>
                        <BookLinkBack />
                    </div>
                </div>
            </section>
        </>
    );
}

BookDescription.propTypes = {
    match: PropTypes.object
}

export default BookDescription;