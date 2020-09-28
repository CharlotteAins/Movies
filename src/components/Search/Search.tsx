import React, {useRef} from 'react';
import PrettyButton from '../PrettyButton';
import styles from './Seach.module.css';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom';

const Search: React.FC = () => {

    const searchInput = useRef(null);
    const history = useHistory();
    const {filterGenre, sortBy} = useSelector(state => state.movies);

    const searchHandler = () => {
        history.push(`/search/${filterGenre ? filterGenre : 'all'}/${sortBy ? sortBy : ' '}/${searchInput.current.value ? searchInput.current.value : ' /'}`)
        searchInput.current.value = '';
    }

    return (
        <>
            <h3 className={styles.searchTitle}>find your movie</h3>
            <form className={styles.searchForm} onSubmit={searchHandler}>
                <input className={styles.searchInput} ref={searchInput} type='text' placeholder='What do you want to watch?'/>
                <PrettyButton clickHandler={searchHandler} text="search"/>
            </form>
        </>
    );
};

export default Search;
