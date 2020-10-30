import React from 'react';
import { useDispatch } from 'react-redux';
import { showPopup } from '../../redux/appActions';
import Logo from '../Logo';
import styles from './Header.module.css';

const Header: React.FC = () => {
    const dispatch = useDispatch();

    const handlePopup = (popup: string) => {
        dispatch(showPopup(popup))
    }

    return (
        <header className={styles.header}>
            <Logo/>
            <button onClick={() => handlePopup("Add")} className={styles.btnAdd}>+ add movie</button>
        </header>
    );
};

export default Header;
