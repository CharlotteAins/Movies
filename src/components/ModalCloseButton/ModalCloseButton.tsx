import React from 'react';
import styles from './ModalCloseButton.module.css';
import {useDispatch} from 'react-redux'
import {closeAllPopups} from "../../redux/appActions";

const ModalCloseButton: React.FC = () => {

    const dispatch = useDispatch();

    const closeHandler = () => {
        dispatch(closeAllPopups());
    }

    return <button onClick={closeHandler} className={styles.modalCloseButton}>&times;</button>;
};

export default ModalCloseButton;
