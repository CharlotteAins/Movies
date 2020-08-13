export interface Movie {
    id: number,
    title: string,
    imageUrl: string,
    tagline: string,
    releaseDate: Date
}

let mockMovies: Movie[] = [
    {id: 337167, title:'Fifty Shades Freed', imageUrl: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg', releaseDate: new Date('2018-02-07'), tagline: 'Don\'t miss the climax'},
    {id: 338970, title:'Tomb Raider', imageUrl: 'https://image.tmdb.org/t/p/w500/ePyN2nX9t8SOl70eRW47Q29zUFO.jpg', releaseDate: new Date('2018-03-08'), tagline: 'Her legend begins'},
    {id: 181808, title:'Star Wars: The Last Jedi', imageUrl: 'https://image.tmdb.org/t/p/w500/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg', releaseDate: new Date('2017-12-13'), tagline: 'The Saga Continues'},
    {id: 284054, title:'Black Panther', imageUrl: 'https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg', releaseDate: new Date('2018-02-13'), tagline: 'Long live the king'},
    {id: 354912, title:'Coco', imageUrl: 'https://image.tmdb.org/t/p/w500/eKi8dIrr8voobbaGzDpe8w0PVbC.jpg', releaseDate: new Date('2017-10-27'), tagline: 'The celebration of a lifetime'},
    {id: 333339, title:'Ready Player One', imageUrl: 'https://image.tmdb.org/t/p/w500/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg', releaseDate: new Date('2018-03-28'), tagline: 'A better reality awaits.'},
]

export const MovieService = {

    getAllMovies: () => {
        return mockMovies;
    },

    editMovie: (id: number) => {
        console.log(`editing movie with id ${id} ...`)
    },

    deleteMovie: (id: number) => {
        console.log(`deleted movie with id ${id}`)
    }
}
