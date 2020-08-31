import React from 'react';
import styles from './ModalCloseButton.module.css';

interface ModalCloseButtonProps {
    closeModal: () => void
}

const ModalCloseButton: React.FC<ModalCloseButtonProps> = ({closeModal}) => {
    return <button onClick={closeModal} className={styles.modalCloseButton}>&times;</button>;
};

export default ModalCloseButton;
