import React from 'react';
import styles from './CardActionsMenu.module.css';
import {useDispatch} from 'react-redux'
import {getMovieById} from "../../redux/movieActions";
import {showPopup} from "../../redux/appActions";

interface CardActionsMenuProps {
    closePopup: () => void,
    movieId: number
}

const CardActionsMenu: React.FC<CardActionsMenuProps> = ({closePopup, movieId}) => {

    const dispatch = useDispatch();

    const handlePopup = (popup: string) => {
        dispatch(getMovieById(movieId));
        dispatch(showPopup(popup))
    }

    return (
        <div className={styles.actionMenu}>
            <button onClick={closePopup} className={styles.closeButton}>&times;</button>
            <ul onClick={closePopup} className={styles.actionList}>
                <li onClick={() => handlePopup("Edit")}>edit</li>
                <li onClick={() => handlePopup("Delete")}>delete</li>
            </ul>
        </div>
    );
};

export default CardActionsMenu;
