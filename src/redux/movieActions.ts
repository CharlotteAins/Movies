import {
    ADD_MOVIE,
    DELETE_MOVIE,
    EDIT_MOVIE,
    FETCH_MOVIES,
    GET_MOVIE_BY_ID,
    HIDE_LOADER,
    SET_FILTER_GENRES,
    SHOW_LOADER
} from "./types";
import {Movie} from "../services/MovieService";
import axios from 'axios';

const HOST = 'http://localhost:4000/';

export function fetchMovies(genre: string = 'all',sortBy: string = '') {
    return (dispatch) => {
        dispatch({type: SHOW_LOADER});
        dispatch({type: SET_FILTER_GENRES, payload: genre});
        let url = HOST + 'movies';
        url += genre != 'all' ? ('?filter=' + genre + '&') : '?';
        url += sortBy ? 'sortBy=' + sortBy : '';
        axios.get(url)
            .then((resp) => {
                let movies = resp.data.data;

                if(sortBy) {
                    movies = movies.sort((movieA, movieB) => {
                        if(movieA[sortBy] > movieB[sortBy]) {
                            return 1;
                        } else if(movieA[sortBy] < movieB[sortBy]) {
                            return -1;
                        } else {
                            return 0;
                        }
                    });
                }

                dispatch({type: FETCH_MOVIES, payload: movies});
                dispatch({type: HIDE_LOADER});
            })
    }
}

export function addMovie(movie: Movie) {
    return (dispatch) => {
        axios.post<Movie>(HOST + 'movies', movie)
            .then((resp) => {
                if (resp.data.id) {
                    dispatch({type: ADD_MOVIE, payload: resp.data})
                }
            })
    }
}

export function editMovie(movie: Movie) {
    return (dispatch) => {
        axios.put(HOST + 'movies', movie)
            .then((resp) => {
                if (resp.data.id) {
                    dispatch({type: EDIT_MOVIE, payload: resp.data})
                }
            })
    }
}

export function getMovieById(id: number) {
    return (dispatch) => {
        axios.get<Movie>(HOST + 'movies/' + id)
            .then((resp) => {
                resp.data.release_date = new Date(resp.data.release_date);
                dispatch({type: GET_MOVIE_BY_ID, payload: resp.data});
            })
    }
}

export function deleteMovie(id: number) {
    return (dispatch) => {
        axios.delete(HOST + 'movies/' + id)
            .then((resp) => {
                dispatch({type: DELETE_MOVIE, payload: id});
            })
    }
}

