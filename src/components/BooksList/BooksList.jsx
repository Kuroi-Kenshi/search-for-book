import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from '@utils/network';
import { getUrl } from '@utils/getUrl';
import { withErrorApi } from '@hoc-helpers/withErrorApi';
import { addBooksData } from '@store/actions';
import BookCard from '@components/BookCard'
import Loader from '@components/Loader'
import ScrollUpBtn from '@components/ScrollUpBtn'

import s from './BooksList.module.sass';

const BooksList = ({ numberOfBooks, loader, setLoader }) => {
    const dispatch = useDispatch()
    const [paginationIndex, setPaginationIndex] = useState(0)
    const pagination = 30
    const formData = useSelector((state) => state.formDataReducer);
    const booksData = useSelector(state => state.booksDataReducer)
    const errorApiStatus = useSelector(state => state.errorApiStatusReducer)
    const url = getUrl({ formData, paginationIndex })
    console.log(errorApiStatus);
    const loadMoreBooks = () => {
        setLoader(true)
        setPaginationIndex(prev => prev + pagination)
        getData(url)
            .then(data => {
                dispatch(addBooksData(data.items))
            })
            .catch(error => console.error(error))
            .finally(() => setLoader(false))
    }

    return (
        <section className={s.bookList}>
            <div className={s.wrapper}>
                <div className={s.bookList__counter}>
                    <span className={s.bookList__count}>Found {numberOfBooks} results</span>
                </div>
                <ul className={`${s.bookList__items}`}>
                    {booksData
                        && booksData.map(({ etag, id, volumeInfo }) => {
                            const { authors, categories, imageLinks, title } = volumeInfo
                            return <BookCard
                                key={etag}
                                id={id}
                                title={title}
                                authors={authors}
                                categories={categories}
                                imageLink={imageLinks?.smallThumbnail}
                            />
                        })}

                </ul>
                {loader ? <Loader small /> : booksData.length ? <button type="button" onClick={loadMoreBooks} className={s.bookList__loadMore}>Load more...</button> : null}
            </div>
            <ScrollUpBtn />
        </section>
    );
}

BooksList.propTypes = {
    numberOfBooks: PropTypes.number,
    Loader: PropTypes.bool,
    setLoader: PropTypes.func,
}

export default withErrorApi(BooksList);