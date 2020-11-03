import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { showPopup } from '../../redux/appActions';
import { getMovieById } from '../../redux/movieActions';
import styles from './CardActionsMenu.module.css';

// PATTERN: Typescript
interface CardActionsMenuProps {
  closePopup: () => void,
  movieId: number;
}

const CardActionsMenu: React.FC<CardActionsMenuProps> = ( { closePopup, movieId } ) => {

  // PATTERN: Redux
  const dispatch = useDispatch();

  const handlePopup = useCallback(
    ( popup: string ) => {
      dispatch( getMovieById( movieId ) );
      dispatch( showPopup( popup ) );
    }, [ movieId, getMovieById, showPopup ] );

  return (
    <div className={styles.actionMenu}>
      <button onClick={closePopup} className={styles.closeButton}>&times;</button>
      <ul onClick={closePopup} className={styles.actionList}>
        <li onClick={() => handlePopup( 'Edit' )}>edit</li>
        <li onClick={() => handlePopup( 'Delete' )}>delete</li>
      </ul>
    </div>
  );
};

export default CardActionsMenu;
