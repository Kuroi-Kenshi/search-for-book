import SearchBar from '@components/SearchBar';

import s from './Header.module.sass';

const Header = () => {
    return (
        <>
            <header className={s.header}>
                <div className={s.wrapper}>
                    <h1 className={s.header__title}>Search for books</h1>
                    <SearchBar />
                </div>
            </header>
        </>
    );
}


export default Header;