import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAllPopups } from '../../redux/appActions';
import { deleteMovie } from '../../redux/movieActions';
import ModalCloseButton from '../ModalCloseButton';
import ModalOverlay from '../ModalOverlay';
import PrettyButton from '../PrettyButton';
import styles from './ModalDeleteMovie.module.css';

const ModalDeleteMovie: React.FC = () => {
  const dispatch = useDispatch();
  const processingMovie = useSelector( ( state ) => state.movies.processingMovie );

  const deleteHandler = useCallback(
    () => {
      dispatch( deleteMovie( processingMovie.id ) );
      dispatch( closeAllPopups() );
    }, [ processingMovie.id, deleteMovie, closeAllPopups ] );

  return (
    <>
      <ModalOverlay />
      <div className={styles.modalWrapper}>
        <ModalCloseButton />
        <h3>Delete movie</h3>
        <p>Are you sure you want to delete this movie?</p>
        <div className={styles.buttonPosition}>
          <PrettyButton clickHandler={deleteHandler} text={'Confirm'} />
        </div>
      </div>
    </>
  );
};

export default ModalDeleteMovie;
