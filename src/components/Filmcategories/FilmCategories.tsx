import React from 'react';
import styles from './FilmCategories.module.css';
import {MovieService} from '../../services/MovieService';

const FilmCategories: React.FC = () => {
    const categories = MovieService.getAllMovieCategories();

    return (
        <ul className={styles.categoriesList}>
            {categories.map((category) => {
                return (
                    <li className={styles.categoriesItem} key={category}>
                        {category}
                    </li>
                );
            })}
        </ul>
    );
};

export default FilmCategories;
