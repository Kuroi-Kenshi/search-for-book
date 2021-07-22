import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFormData } from '@store/actions'
import s from './SearchBar.module.sass';

const SearchBar = () => {
    const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        searchText: '',
        category: 'all',
        sortingBy: 'newest'
    })

    const addSearchData = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const addFormDataToStore = (e) => {
        e.preventDefault()
        dispatch(addFormData(formData))

    }

    return (
        <>
            <form className={s.searchBar}>
                <div className={s.searchFieled}>
                    <input type="text" name="searchText" placeholder="Keywords" value={formData.searchText} className={s.searchFieled__input} onChange={addSearchData} required />
                    <button type="submit" onSubmit={addFormDataToStore} className={s.searchFieled__btn}></button>
                </div>
                <div className={s.searchBar__selects}>
                    <label className={s.searchBar__selects_category}>
                        <span>Categories</span>
                        <select name="category" defaultValue="all" onChange={addSearchData}>
                            <option value="all">all</option>
                            <option value="art">art</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
                        </select>
                    </label>
                    <label className={s.searchBar__selects_sorting}>
                        <span>Sorting By</span>
                        <select name="sortingBy" defaultValue="newest" onChange={addSearchData}>
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </select>
                    </label>
                </div>
            </form>
        </>
    );
}

export default SearchBar;