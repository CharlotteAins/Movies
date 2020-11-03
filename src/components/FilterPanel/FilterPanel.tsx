import React from 'react';
import FilmCategories from '../FilmCategories';
import FilmsSort from '../FilmsSort';
import styles from './FilterPanel.module.css';

const FilterPanel: React.FC = () => {
  return (
    <>
      <div className={styles.filmOptions}>
        <FilmCategories />
        <FilmsSort />
      </div>
      <hr className={styles.separator} />
    </>
  );
};

export default FilterPanel;
