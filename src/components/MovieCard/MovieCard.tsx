import Router from 'next/router';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieById } from '../../redux/movieActions';
import { Movie } from '../../services/MovieService';
import CardActionsMenu from '../CardActionsMenu';
import styles from './MovieCard.module.css';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ( { movie } ) => {
  const [ showActionMenu, toggleActionMenu ] = useState( false );

  const dispatch = useDispatch();

  const menuButtonHandler = useCallback(
    () => {
      dispatch( getMovieById( movie.id ) );
      toggleActionMenu( true );
    }, [ getMovieById, movie.id, toggleActionMenu ] );

  const cardClickHandler = () => {
    Router.push( `/film/${ movie.id }` );
  };

  return (
    <li className={styles.movieCard}>
      <img onClick={cardClickHandler} src={movie.poster_path} width='350' height='450' />
      <div className={styles.filmInfo}>
        <p className={styles.filmTitle}>{movie.title}</p>
        <p className={styles.filmYear}>{new Date( movie.release_date ).getFullYear()}</p>
      </div>
      <p className={styles.filmTagline}>{movie.tagline}</p>
      <button onClick={menuButtonHandler} type={'button'} className={styles.cardMenuButton}>...</button>
      {showActionMenu && <CardActionsMenu movieId={movie.id} closePopup={() => toggleActionMenu( false )} />}
    </li>
  );
};

export default MovieCard;
