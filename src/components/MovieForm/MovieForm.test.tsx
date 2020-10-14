import React from 'react';
import {render, fireEvent, screen} from '@testing-library/react';
import MovieForm from './MovieForm';
import {Movie} from '../../services/MovieService';

describe('MovieForm', () => {
    const mockHandler = jest.fn();
    let emptyMovie: Movie;

    const renderMovieForm = () => render(<MovieForm formType={'add'} initialMovie={emptyMovie} submitHandler={mockHandler}/>);

    beforeEach(() => {
        emptyMovie = {release_date: null, poster_path: '', title: '', overview: '', runtime: 0, genres: []};
    });

    it('should render properly', () => {
        const tree = renderMovieForm();
        expect(tree).toMatchSnapshot();
    });

    it('should not call submitHandler if inputs empty', () => {
        renderMovieForm();

        fireEvent.click(screen.getByText('save'));

        expect(mockHandler).not.toBeCalled();
    });

    it('should work reset form', () => {
        renderMovieForm();
        const input: HTMLInputElement = screen.getByPlaceholderText('enter title') as HTMLInputElement;

        fireEvent.change(input, {target: {value: 'mock title'}});
        expect(input.value).toEqual('mock title');

        fireEvent.click(screen.getByText('reset'));
        expect(input.value).toEqual('');
    });

    it('should send correct form', () => {
        renderMovieForm();

        fireEvent.change(screen.getByPlaceholderText('enter title'), {target: {value: 'mock title'}});
        fireEvent.change(screen.getByPlaceholderText('enter overview'), {target: {value: 'mock overview'}});
        fireEvent.change(screen.getByPlaceholderText('runtime text goes here'), {target: {value: 120}});
        fireEvent.change(screen.getByPlaceholderText('Select Date'), {target: {value: new Date('2020-10-10T03:24:00')}});
        fireEvent.change(screen.getByPlaceholderText('movie URL here'), {target: {value: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'}});
        fireEvent.click(screen.getByDisplayValue('action'));

        fireEvent.click(screen.getByText('save'));
        expect(mockHandler).toBeCalled();
    });
});
