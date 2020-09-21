import React from 'react';
import styles from './FilmCategories.module.css';
import {MovieService} from '../../services/MovieService';
import {useDispatch} from 'react-redux'
import {fetchMovies, filterMovies} from "../../redux/movieActions";

const FilmCategories: React.FC = () => {
    const categories = MovieService.getAllMovieCategories().slice(0, 5);

    const dispatch = useDispatch();

    const filterHandler = (category: string) => {
        dispatch(fetchMovies(category));
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
