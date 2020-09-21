import React from 'react';
import styles from './ModalDeleteMovie.module.css';
import ModalOverlay from '../ModalOverlay';
import ModalCloseButton from '../ModalCloseButton';
import PrettyButton from '../PrettyButton';
import {useDispatch, useSelector} from 'react-redux'
import {deleteMovie} from "../../redux/movieActions";
import {closeAllPopups} from "../../redux/appActions";

const ModalDeleteMovie: React.FC = () => {

    const dispatch = useDispatch();
    const processingMovie = useSelector(state => state.movies.processingMovie);

    const deleteHandler = () => {
        dispatch(deleteMovie(processingMovie.id));
        dispatch(closeAllPopups());
    }

    return (
        <>
            <ModalOverlay/>
            <div className={styles.modalWrapper}>
                <ModalCloseButton/>
                <h3>Delete movie</h3>
                <p>Are you sure you want to delete this movie?</p>
                <div className={styles.buttonPosition}>
                    <PrettyButton clickHandler={deleteHandler} text={'Confirm'}/>
                </div>
            </div>
        </>
    );
};

export default ModalDeleteMovie;
