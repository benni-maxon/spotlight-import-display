/* Imports */

import { getApps, getMovies, getPeople, getPlants } from './fetch-utils.js';
import {
    renderAppTemplate,
    renderMovieTemplate,
    renderPersonTemplate,
    renderPlantTemplate,
} from './render-utils.js';

/* Get DOM Elements */
const movieDivContainer = document.getElementById('movie-div-container');
const appDivContainer = document.getElementById('app-div-container');
const personDivContainer = document.getElementById('person-div-container');
const plantDivContainer = document.getElementById('plant-div-container');

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
window.addEventListener('load', async () => {
    const apps = await getApps();
    for (let app of apps) {
        const appEl = renderAppTemplate(app);
        appDivContainer.append(appEl);
    }
});
window.addEventListener('load', async () => {
    const people = await getPeople();
    for (let person of people) {
        const personEl = renderPersonTemplate(person);
        personDivContainer.append(personEl);
    }
});
window.addEventListener('load', async () => {
    const plants = await getPlants();
    for (let plant of plants) {
        const plantEl = renderPlantTemplate(plant);
        plantDivContainer.append(plantEl);
    }
});
// (don't forget to call any display functions you want to run on page load!)
