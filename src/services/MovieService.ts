export interface Movie {
    id: number,
    title: string,
    imageUrl: string,
    tagline?: string,
    releaseDate: Date,
    genres?: string[],
    runtime?: number,
    overview?: string,
    vote_average?: number
}

let mockMovies: Movie[] = [
    {
        id: 337167,
        title: 'Fifty Shades Freed',
        imageUrl: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
        releaseDate: new Date('2018-02-07'),
        tagline: 'Don\'t miss the climax',
        genres: [
            'Drama',
            'Romance'
        ],
        runtime: 130,
        vote_average: 4.5,
        overview: 'A live-action adaptation of Disney`s version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.'
    },
    {
        id: 338970,
        title: 'Tomb Raider',
        imageUrl: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg',
        releaseDate: new Date('2018-03-08'),
        tagline: 'Her legend begins',
        genres: [
            'Action',
            'Adventure',
        ],
        runtime: 130,
        vote_average: 4.5,
        overview: 'A live-action adaptation of Disney`s version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.'
    },
    {
        id: 181808,
        title: 'Star Wars: The Last Jedi',
        imageUrl: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg',
        releaseDate: new Date('2017-12-13'),
        tagline: 'The Saga Continues',
        genres: [
            'Fantasy',
            'Adventure',
            'Science Fiction',
        ],
        runtime: 130,
        vote_average: 4.5,
        overview: 'A live-action adaptation of Disney`s version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.'
    },
    {
        id: 284054,
        title: 'Black Panther',
        imageUrl: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg',
        releaseDate: new Date('2018-02-13'),
        tagline: 'Long live the king',
        genres: [
            'Action',
            'Adventure',
            'Fantasy',
            'Science Fiction',
        ],
        runtime: 130,
        vote_average: 4.5,
        overview: 'A live-action adaptation of Disney`s version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.'
    },
    {
        id: 354912,
        title: 'Coco',
        imageUrl: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg',
        releaseDate: new Date('2017-10-27'),
        tagline: 'The celebration of a lifetime',
        genres: [
            'Adventure',
            'Comedy',
            'Family',
            'Animation',
        ],
        runtime: 130,
        vote_average: 4.5,
        overview: 'A live-action adaptation of Disney`s version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.'
    },
    {
        id: 333339,
        title: 'Ready Player One',
        imageUrl: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg',
        releaseDate: new Date('2018-03-28'),
        tagline: 'A better reality awaits.',
        genres: [
            'Adventure',
            'Science Fiction',
            'Action',
        ],
        runtime: 130,
        vote_average: 4.5,
        overview: 'A live-action adaptation of Disney`s version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.'
    },
];

const categories: string[] = [
    'all',
    'documentary',
    'comedy',
    'horror',
    'crime',
    'Adventure',
    'Science Fiction',
    'Action',
    'Family',
    'Animation',
    'Fantasy',
    'Drama',
    'Romance'
];

export const MovieService = {

    getAllMovies: () => {
        return new Promise<Movie[]>((resolve) => setTimeout(() => resolve(mockMovies), 2000));
    },

    getAllMovieCategories: () => {
        return categories;
    },

    editMovie: (movie: Movie) => {
        console.log(`editing movie with id ${movie.id} ...`);
        Object.assign(mockMovies.find((m) => m.id === movie.id), movie);
    },

    addMovie: (movie: Movie) => {
        movie.id = Math.round(Math.random() * 1000000);
        mockMovies.push(movie);
    },

    deleteMovie: (id: number) => {
        mockMovies = mockMovies.filter((movie) => movie.id !== id);
        console.log(`deleted movie with id ${id}`);
    },

    getMovieById(processingMovieId: number) {
        return mockMovies.find((movie) => movie.id === processingMovieId);
    },
};
