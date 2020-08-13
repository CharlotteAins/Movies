import React from 'react';
import styles from './FilterWrapper.module.css';
import FilmCategories from '../Filmcategories/FilmCategories';
import FilmsSort from '../FilmsSort/FilmsSort';

const FilterWrapper: React.FC = () => {
    return (
        <>
            <div className={styles.filmOptions}>
                <FilmCategories/>
                <FilmsSort/>
            </div>
            <hr className={styles.separator}/>
        </>
    );
};

export default FilterWrapper;
