import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { MovieService } from '../../services/MovieService';
import styles from './FilmCategories.module.css';

const FilmCategories: React.FC = () => {
  const categories = MovieService.getAllMovieCategories().slice( 0, 5 );

  const { sortBy, search } = useSelector( ( state ) => state.movies );
  const router = useRouter();

  const filterHandler = ( category: string ) => {
    router.push( {
      pathname: '/search/[category]/[sortBy]/[search]',
      query: { category, sortBy, search },
    } );
  };

  return (

    //PATTERN: Encapsulate Style Component
    <ul className={styles.categoriesList}>
      {categories.map( ( category ) => {
        return (
          <li onClick={() => filterHandler( category )} className={styles.categoriesItem} key={category}>
            {category}
          </li>
        );
      } )}
    </ul>
  );
};

export default FilmCategories;
