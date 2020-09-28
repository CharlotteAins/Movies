import React from 'react';
import styles from './FilmCategories.module.css';
import {MovieService} from '../../services/MovieService';
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom';

const FilmCategories: React.FC = () => {
    const categories = MovieService.getAllMovieCategories().slice(0, 5);

    const history = useHistory();
    const {sortBy, search} = useSelector(state => state.movies);

    const filterHandler = (category: string) => {
        history.push(`/search/${category ? category : 'all'}/${sortBy ? sortBy : ' '}/${search ? search : ' /'}`)
    }

    return (
        <ul className={styles.categoriesList}>
            {categories.map((category) => {
                return (
                    <li onClick={() => filterHandler(category)} className={styles.categoriesItem} key={category}>
                        {category}
                    </li>
                );
            })}
        </ul>
    );
};

export default FilmCategories;
