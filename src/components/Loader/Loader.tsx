import React from 'react';
import styles from './Loader.module.css';

const Loader: React.FC = () => {
    return (
        <div className={styles.loaderWrapper}>
            <div className={styles.ldsRoller}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    );
};

export default Loader;
