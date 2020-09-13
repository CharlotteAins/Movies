import {ADD_MOVIE, DELETE_MOVIE, EDIT_MOVIE, FETCH_MOVIES, GET_MOVIE_BY_ID, SET_FILTER_GENRES} from "./types";
import {Movie} from "../services/MovieService";

const initialState = {
    movies: [],
    processingMovie: {release_date: new Date(), poster_path: '', title: '', overview: '', runtime: 0, genres: []},
    filterGenre: 'all'
};

export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {...state, movies: action.payload};
        case ADD_MOVIE:
            return {...state, movies: state.movies.concat([action.payload])};
        case EDIT_MOVIE:
            return {...state, movies: updateMovies(state.movies, action.payload)}
        case DELETE_MOVIE:
            return {...state, movies: state.movies.filter(movie => movie.id !== action.payload)}
        case GET_MOVIE_BY_ID:
            return {...state, processingMovie: action.payload}
        case SET_FILTER_GENRES:
            return {...state, filterGenre: action.payload}
        default:
            return state;
    }
}

const updateMovies = (movies: Movie[], updatedMovie: Movie) => {
    return movies.map(movie => {
        if (movie.id === updatedMovie.id) {
            movie = updatedMovie
        }
        return movie;
    })
}
