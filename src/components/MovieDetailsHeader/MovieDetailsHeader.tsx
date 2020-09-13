import React from "react";
import styles from './MovieDetailsHeader.module.css'
import Logo from "../Logo/Logo";

const MovieDetailsHeader: React.FC = () => {
    return (
        <div className={styles.headerWrapper}>
            <Logo/>
            <button className={styles.searchButton} type={"button"}>&#9906;</button>
        </div>
    )
}

export default MovieDetailsHeader;
