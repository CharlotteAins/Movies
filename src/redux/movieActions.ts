import {
    ADD_MOVIE,
    DELETE_MOVIE,
    EDIT_MOVIE,
    FETCH_MOVIES,
    GET_MOVIE_BY_ID,
    HIDE_LOADER,
    SET_FILTER_GENRES, SET_SEARCH, SET_SORT_BY,
    SHOW_LOADER
} from "./types";
import {Movie} from "../services/MovieService";
import axios from 'axios';

const HOST = 'http://localhost:4000/';

export function fetchMovies(genre: string = '', sortBy: string = '', search: string = '') {
    return (dispatch) => {
        dispatch({type: SHOW_LOADER});
        dispatch({type: SET_FILTER_GENRES, payload: genre});
        dispatch({type: SET_SORT_BY, payload: sortBy});
        dispatch({type: SET_SEARCH, payload: search});
        let url = HOST + 'movies';
        url += genre && genre != 'all' ? ('?filter=' + genre + '&') : '?';
        url += sortBy ? ('sortBy=' + sortBy + '&sortOrder=desc&') : '';
        url += search ? 'search=' + search + '&searchBy=title' : '';
        url += !genre && !sortBy && !search ? 'filter=showNothing' : '';
        axios.get(url)
            .then((resp) => {
                dispatch({type: FETCH_MOVIES, payload: resp.data.data});
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

