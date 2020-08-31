import React, {useContext} from 'react';
import Logo from '../Logo';
import styles from './Header.module.css';
import Context from '../../services/Context';

const Header: React.FC = () => {
    const {handleAddPopup} = useContext(Context);

    return (
        <header className={styles.header}>
            <Logo/>
            <button onClick={handleAddPopup} className={styles.btnAdd}>+ add movie</button>
        </header>
    );
};

export default Header;
