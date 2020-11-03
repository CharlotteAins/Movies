import { useRouter } from 'next/router';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import PrettyButton from '../PrettyButton';
import styles from './Seach.module.css';

const Search: React.FC = () => {
  const searchInput = useRef( null );
  const { filterGenre, sortBy } = useSelector( ( state ) => state.movies );
  const router = useRouter();

  const searchHandler = () => {
    router.push( {
      pathname: '/search/[category]/[sortBy]/[search]',
      query: { category: filterGenre, sortBy, search: searchInput.current.value },
    } );
    searchInput.current.value = ' ';
  };

  return (
    <>
      <h3 className={styles.searchTitle}>find your movie</h3>
      <form className={styles.searchForm} onSubmit={searchHandler}>
        <input className={styles.searchInput} ref={searchInput} type='text' placeholder='What do you want to watch?' />
        <PrettyButton clickHandler={searchHandler} text="search" />
      </form>
    </>
  );
};

export default Search;
