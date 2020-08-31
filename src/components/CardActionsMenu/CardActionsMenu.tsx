import React, {useContext, useState} from 'react';
import styles from './CardActionsMenu.module.css';
import Context from '../../services/Context';

interface CardActionsMenuProps {
    closePopup: () => void
}

const CardActionsMenu: React.FC<CardActionsMenuProps> = ({closePopup}) => {
    const {handleDeletePopup, handleEditPopup} = useContext(Context);

    return (
        <div className={styles.actionMenu}>
            <button onClick={closePopup} className={styles.closeButton}>&times;</button>
            <ul onClick={closePopup} className={styles.actionList}>
                <li onClick={handleEditPopup}>edit</li>
                <li onClick={handleDeletePopup}>delete</li>
            </ul>
        </div>
    );
};

export default CardActionsMenu;
