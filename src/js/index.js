import '../css/styles.css';
import Debounce from 'lodash.debounce';
import ApiCountries from './fetchCountries'

const DEBOUNCE_DELAY = 300;
const apiCountries = new ApiCountries();

const searchContry = document.querySelector('#search-box');
searchContry.addEventListener('input', Debounce(onSearchContry, DEBOUNCE_DELAY))

function onSearchContry(e) {
    const countries = e.target.value;
   apiCountries.fetchCountries(countries.trim());
};
console.log(ApiCountries.dataCountries)
// name.official - полное имя страны
// capital - столица
// population - население
// flags.svg - ссылка на изображение флага
// languages - массив языков
// function fetchCountries(name) {
//     const url = 'https://restcountries.com/v3.1'
// return fetch(`${url}/name/${name}`).then(response => response.json()).then(result => console.log()).catch(error => error);
// }
