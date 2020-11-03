import React from 'react';
import { Movie } from '../../services/MovieService';
import MovieCard from '../MovieCard/index';
import styles from './MovieList.module.css';

//PATTERN: Typescript
interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ( { movies } ) => {
  if ( movies.length ) {

    //PATTERN: Children As Array
    return (
      <>
        <p className={styles.moviesCount}><b>{movies.length}</b> movies found</p>
        <ul className={styles.movieList}>
          {movies.map( ( movie ) => {
            return <MovieCard movie={movie} key={movie.id} />;
          } )}
        </ul>
      </>
    );
  }
  return (
    <div className={styles.withoutMovies}>
      Not any movie found =(
    </div>
  );
};

export default MovieList;
