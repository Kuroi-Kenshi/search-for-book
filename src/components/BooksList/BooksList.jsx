import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { getData } from '@utils/network';
import { getUrl } from '@utils/getUrl';
import { addBooksData } from '@store/actions';
import BookCard from '@components/BookCard'
import Loader from '@components/Loader'
import s from './BooksList.module.sass';

const BooksList = ({ numberOfBooks }) => {
    const dispatch = useDispatch()
    const [paginationIndex, setPaginationIndex] = useState(0)
    const [loader, setLoader] = useState(false)
    const pagination = 30
    const formData = useSelector((state) => state.formDataReducer);
    const booksData = useSelector(state => state.booksDataReducer)
    const url = getUrl(formData, paginationIndex)

    const loadMoreBooks = () => {
        setLoader(true)
        setPaginationIndex(prev => prev + pagination)
        getData(url)
            .then(data => {
                dispatch(addBooksData(data.items))
                setLoader(false)
            })
            .catch(error => console.error(error))

    }

    useEffect(() => {
        if (booksData.length === 0) {
            setLoader(true)
        } else {
            setLoader(false)
        }
    }, [booksData])

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
                {loader ? <Loader small /> : <button type="button" onClick={loadMoreBooks} className={s.bookList__loadMore}>Load more...</button>}
            </div>
        </section>
    );
}

BooksList.propTypes = {
    numberOfBooks: PropTypes.number
}

export default BooksList;