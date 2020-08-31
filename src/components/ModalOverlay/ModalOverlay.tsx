import React from 'react';
import styles from './ModalOverlay.module.css';

interface ModalOverlayProps {
    closePopupHandler: () => void
}

const ModalOverlay: React.FC<ModalOverlayProps> = ({closePopupHandler}) => {
    return (
        <div onClick={closePopupHandler} className={styles.modalOverlay}></div>
    );
};

export default ModalOverlay;
