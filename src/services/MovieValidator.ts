export interface ValidationError {
  title?: string,
  overview?: string,
  runtime?: string,
  release_date?: string,
  poster_path?: string,
  genres?: string,
}


export const MovieValidator = ( values ) => {
  const errors: ValidationError = {};

  if ( !values.title.trim() ) {
    errors.title = 'Title is required';
  }

  if ( !values.overview.trim() ) {
    errors.overview = 'Overview is required';
  }

  if ( isNaN( values.runtime ) ) {
    errors.runtime = 'Runtime should be number';
  } else if ( values.runtime < 0 ) {
    errors.runtime = 'Runtime should be positive';
  }

  if ( !values.poster_path.trim() ) {
    errors.poster_path = 'Image URL is required';
  } else if ( !values.poster_path.match( /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi ) ) {
    errors.poster_path = 'Image URL should be correct';
  }

  if ( !values.genres.length ) {
    errors.genres = 'Genre should be at least one';
  }

  return errors;
};
