/* Imports */

import { getMovies } from './fetch-utils.js';
import { renderMovieTemplate } from './render-utils.js';

/* Get DOM Elements */
const movieDivContainer = document.getElementById('movie-div-container');

/* State */

/* Events */

/* Display Functions */
window.addEventListener('load', async () => {
    const movies = await getMovies();
    for (let movie of movies) {
        const movieEl = renderMovieTemplate(movie);
        movieDivContainer.append(movieEl);
    }
});
// (don't forget to call any display functions you want to run on page load!)
