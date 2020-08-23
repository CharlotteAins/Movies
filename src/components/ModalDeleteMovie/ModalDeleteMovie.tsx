import React, {useContext} from 'react';
import styles from './ModalDeleteMovie.module.css';
import ModalOverlay from '../ModalOverlay';
import ModalCloseButton from '../ModalCloseButton';
import PrettyButton from '../PrettyButton';
import Context from '../../services/Context';

interface ModalDeleteMovieProps {
    deleteHandler: () => void
}

const ModalDeleteMovie: React.FC<ModalDeleteMovieProps> = ({deleteHandler}) => {
    const {handleDeletePopup} = useContext(Context);

    return (
        <>
            <ModalOverlay closePopupHandler={handleDeletePopup}/>
            <div className={styles.modalWrapper}>
                <ModalCloseButton closeModal={handleDeletePopup}/>
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
