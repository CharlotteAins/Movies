export interface ValidationError {
    title?: string,
    overview?: string,
    runtime?: string,
    release_date?: string,
    poster_path?: string,
    genres?: string,
}

export const MovieValidator = {

    validate: function (key: string, value: any): ValidationError {
        const error: ValidationError = {};

        switch (key) {
            case 'title':
                if (!value.trim()) error.title = 'Title is required';
                else error.title = '';
                return error;
            case 'overview':
                if (!value.trim()) error.overview = 'Overview is required';
                else  error.overview = '';
                return error;
            case 'runtime':
                if (isNaN(value)) error.runtime = 'Runtime should be number';
                else if (value < 0) error.runtime = 'Runtime should be positive';
                else error.runtime = '';
                return error;
            case 'poster_path':
                if (!value.trim()) error.poster_path = 'Image URL is required';
                else if (!value.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi)) error.poster_path = 'Image URL should be correct';
                else error.poster_path = '';
                return error;
            case 'genres':
                if (!value.length) error.genres = 'Genre should be at least one';
                else error.genres = '';
                return error;
            default:
                return error;
        }
    }
}
