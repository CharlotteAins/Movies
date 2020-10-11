import {movieReducer} from './movieReducer';
import {
    ADD_MOVIE,
    DELETE_MOVIE,
    EDIT_MOVIE,
    FETCH_MOVIES,
    GET_MOVIE_BY_ID,
    SET_FILTER_GENRES, SET_SEARCH,
    SET_SORT_BY,
} from './types';
import {Movie} from '../services/MovieService';

describe('movie reducer', () => {
    let initialState;
    const emptyMovie = {release_date: new Date('2020-10-10T03:24:00'), poster_path: '', title: '', overview: '', runtime: 0, genres: []};
    let testMovie: Movie;

    beforeEach(() => {
        initialState = {
            movies: [],
            processingMovie: emptyMovie,
            filterGenre: 'all',
            sortBy: '',
            search: '',
        };

        testMovie = {id: 4, poster_path: 'test/path', release_date: new Date('2020-10-10T03:24:00'), title: 'testMovie'};
    });

    it('should return initial state', () => {
        expect(movieReducer(undefined, {})).toEqual(initialState);
    });

    it('should handle FETCH_MOVIES', () => {
        expect(movieReducer(initialState, {type: FETCH_MOVIES, payload: [testMovie]}))
            .toEqual({
                movies: [testMovie],
                processingMovie: emptyMovie,
                filterGenre: 'all',
                sortBy: '',
                search: '',
            });
    });

    it('should handle ADD_MOVIE', () => {
        expect(movieReducer(initialState, {type: ADD_MOVIE, payload: testMovie}))
            .toEqual({
                movies: [testMovie],
                processingMovie: emptyMovie,
                filterGenre: 'all',
                sortBy: '',
                search: '',
            });
    });

    it('should handle EDIT_MOVIE', () => {
        const newTestMovie: Movie = {...testMovie, title: 'newTestMovie'};

        expect(movieReducer({
            movies: [testMovie],
            processingMovie: emptyMovie,
            filterGenre: 'all',
            sortBy: '',
            search: '',
        },
        {type: EDIT_MOVIE, payload: newTestMovie}))
            .toEqual({
                movies: [newTestMovie],
                processingMovie: emptyMovie,
                filterGenre: 'all',
                sortBy: '',
                search: '',
            });
    });

    it('should handle DELETE_MOVIE', () => {
        expect(movieReducer({
            movies: [testMovie],
            processingMovie: emptyMovie,
            filterGenre: 'all',
            sortBy: '',
            search: '',
        },
        {type: DELETE_MOVIE, payload: testMovie.id}))
            .toEqual({
                movies: [],
                processingMovie: emptyMovie,
                filterGenre: 'all',
                sortBy: '',
                search: '',
            });
    });

    it('should handle GET_MOVIE_BY_ID', () => {
        expect(movieReducer(initialState, {type: GET_MOVIE_BY_ID, payload: testMovie}))
            .toEqual({
                movies: [],
                processingMovie: testMovie,
                filterGenre: 'all',
                sortBy: '',
                search: '',
            });
    });

    it('should handle SET_FILTER_GENRES', () => {
        expect(movieReducer(initialState, {type: SET_FILTER_GENRES, payload: 'horror'}))
            .toEqual({
                movies: [],
                processingMovie: emptyMovie,
                filterGenre: 'horror',
                sortBy: '',
                search: '',
            });
    });

    it('should handle SET_SORT_BY', () => {
        expect(movieReducer(initialState, {type: SET_SORT_BY, payload: 'title'}))
            .toEqual({
                movies: [],
                processingMovie: emptyMovie,
                filterGenre: 'all',
                sortBy: 'title',
                search: '',
            });
    });

    it('should handle SET_SEARCH', () => {
        expect(movieReducer(initialState, {type: SET_SEARCH, payload: 'search'}))
            .toEqual({
                movies: [],
                processingMovie: emptyMovie,
                filterGenre: 'all',
                sortBy: '',
                search: 'search',
            });
    });
});
