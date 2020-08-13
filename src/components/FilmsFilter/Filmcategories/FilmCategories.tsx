import React from 'react';
import styles from './FilmCategories.module.css';

const FilmCategories: React.FC = () => {
    const categories: string[] = ['all', 'documentary', 'comedy', 'horror', 'crime'];
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
