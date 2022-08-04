import '../css/styles.css';
import Debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import apiCountries from './fetchCountries';


const DEBOUNCE_DELAY = 300;


const searchContry = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list')
const coutryInfo = document.querySelector('.country-info');

searchContry.addEventListener('input', Debounce(onSearchContry, DEBOUNCE_DELAY))

function onSearchContry(e) {
    const countries = e.target.value;
    if (countries === '') { 
        coutryInfo.innerHTML = '';  //очищає HTML якщо дуже швидко видаляем input
        countryList.innerHTML = '';
        return;
    }
    apiCountries(countries.trim())
        .then(data => insertContent(data))
        .catch(error => notFound(error));
    
};

const insertContent = (countries) => {
    if (countries.length > 10) {
        Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
        countryList.innerHTML = '';
        return;
    } else if (countries.length === 1) {
        const resultInfo = countryInfoMarkup(countries)
        coutryInfo.insertAdjacentHTML('beforeend', resultInfo);
    } else {
        coutryInfo.innerHTML = '';
    }
     const result = listCountry(countries);
     countryList.innerHTML = result;  
}

const listCountry = (list) => list.reduce((acc, item) => acc + countryMarkup(item), '');


const countryMarkup = (({ name, flags }) => {
    return `<li class="country-item">
    <img src='${flags.svg}' alt='flag ${name}' width='60' height='40'>${name}</li>`
});

const countryInfoMarkup = (country) => {
    for (let { capital, population, languages } of country) {
        const language = languages.map(list => list.name).join(' ');
        const info = `<p class="country-info__text"><span>Capital:</span>${capital}</p>
        <p class="country-info__text"><span>Population:</span>${population}</p>
        <p class="country-info__text"><span>Languages:</span>${language}</p>`;
        return info;
    }
};

const notFound = () => {
    Notiflix.Notify.failure('Oops, there is no country with that name')
    countryList.innerHTML = '';  
    coutryInfo.innerHTML = ''
};

