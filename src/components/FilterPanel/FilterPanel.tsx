import React from 'react';
import styles from './FilterPanel.module.css';
import FilmCategories from '../Filmcategories';
import FilmsSort from '../FilmsSort';

const FilterPanel: React.FC = () => {
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

export default FilterPanel;
