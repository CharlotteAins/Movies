import React from "react";
import styles from './MovieDetailsHeader.module.css'
import Logo from "../Logo";
import {useHistory} from 'react-router-dom';

const MovieDetailsHeader: React.FC = () => {

    const history = useHistory();

    return (
        <div className={styles.headerWrapper}>
            <Logo/>
            <button onClick={() => history.push('/')} className={styles.searchButton} type={"button"}>&#9906;</button>
        </div>
    )
}

export default MovieDetailsHeader;
