export function renderMovieTemplate(movie) {
    const div = document.createElement('div');
    div.classList.add('movie-div');

    const titleEl = document.createElement('h3');
    titleEl.textContent = movie.title;

    const genreEl = document.createElement('p');
    genreEl.textContent = `Genre: ${movie.genre}`;

    const ul = document.createElement('ul');
    for (let language of movie.localization) {
        const li = document.createElement('li');
        li.textContent = language;
        ul.append(li);
    }

    const localizationEl = document.createElement('p');
    localizationEl.textContent = 'Localization:';
    localizationEl.append(ul);

    div.append(titleEl, genreEl, localizationEl);

    return div;
}
