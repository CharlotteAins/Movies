import React from 'react';
import PrettyButton from '../PrettyButton/PrettyButton';
import styles from './Seach.module.css';

const Search: React.FC = () => {
    return (
        <>
            <h3 className={styles.searchTitle}>find your movie</h3>
            <form className={styles.searchForm}>
                <input className={styles.searchInput} type='text' placeholder='What do you want to watch?'/>
                <PrettyButton text="search"/>
            </form>
        </>
    );
};

export default Search;
