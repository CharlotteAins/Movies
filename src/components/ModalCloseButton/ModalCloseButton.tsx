import React from 'react';
import { useDispatch } from 'react-redux';
import { closeAllPopups } from '../../redux/appActions';
import styles from './ModalCloseButton.module.css';

const ModalCloseButton: React.FC = () => {
    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(closeAllPopups());
    }

    return <button onClick={closeHandler} className={styles.modalCloseButton}>&times;</button>;
};

export default ModalCloseButton;
