import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './FilmsSort.module.css';

const FilmsSort: React.FC = () => {
  const sortOptions: string[] = [ 'release date', 'rating' ];

  const [ optionsVisibility, setOptionsVisibility ] = useState( false );
  const [ currentOption, setCurrentOption ] = useState( sortOptions[ 0 ] );

  const { filterGenre, search } = useSelector( ( state ) => state.movies );
  const router = useRouter();

  const showAllOptions = () => {
    setOptionsVisibility( ( prevState ) => !prevState );
  };

  const changeCurrentOption = ( option: string ) => {
    setCurrentOption( option );
    option = option === 'release date' ? 'release_date' : 'vote_average';
    router.push( {
      pathname: '/search/[category]/[sortBy]/[search]',
      query: { category: filterGenre, sortBy: option, search },
    } );
  };

  return (

    //PATTERN: Encapsulate Style Component, Array As Children
    <div onClick={showAllOptions} className={styles.sortForm}>
      <span className={styles.sortLabel}>sort by</span>
      <ul className={styles.sortList}>
        {sortOptions.map( ( option ) => {
          return (
            <li hidden={!optionsVisibility && option !== currentOption}
              onClick={() => changeCurrentOption( option )}
              className={styles.sortItem}
              key={option}>
              {option}
            </li>
          );
        } )}
      </ul>

    </div>
  );
};

export default FilmsSort;
