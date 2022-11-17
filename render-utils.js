export function renderMovieTemplate(movie) {
    const div = document.createElement('div');
    div.classList.add('movie-div');

    const titleEl = document.createElement('h3');
    titleEl.textContent = `Movie Title: ${movie.title}`;

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
export function renderAppTemplate(app) {
    const div = document.createElement('div');
    div.classList.add('app-div');

    const nameEl = document.createElement('h3');
    nameEl.textContent = `App Name: ${app.name}`;

    const companyEl = document.createElement('p');
    companyEl.textContent = `company: ${app.company}`;

    const countryEl = document.createElement('p');
    countryEl.textContent = `country: ${app.country}`;

    div.append(nameEl, companyEl, countryEl);

    return div;
}
export function renderPersonTemplate(person) {
    const div = document.createElement('div');
    div.classList.add('person-div');

    const firstEl = document.createElement('h3');
    firstEl.textContent = `First Name: ${person.first}`;

    const lastEl = document.createElement('p');
    lastEl.textContent = `Last Name: ${person.last}`;

    const phraseEl = document.createElement('p');
    phraseEl.textContent = `Catchphrase: ${person.phrase}`;

    div.append(firstEl, lastEl, phraseEl);

    return div;
}
export function renderPlantTemplate(plant) {
    const div = document.createElement('div');
    div.classList.add('plant-div');

    const commonEl = document.createElement('h3');
    commonEl.textContent = `Common Name: ${plant.common}`;

    const scientificEl = document.createElement('p');
    scientificEl.textContent = `Scientific Name: ${plant.scientific}`;

    const familyEl = document.createElement('p');
    familyEl.textContent = `Family: ${plant.family}`;

    div.append(commonEl, scientificEl, familyEl);

    return div;
}
