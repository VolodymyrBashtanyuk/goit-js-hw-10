export default function fetchCountries(name) {
    const url = 'https://restcountries.com/v2'
return fetch(`${url}/name/${name}?fields=name,capital,population,flags,languages`).then(response => response.json()).then(name => name);
};

// name.official - полное имя страны name
// capital - столица capital:
// population - население population
// flags.svg - ссылка на изображение флага flags:
// languages - массив языков languages: {aym: "Aymara", que: "Quechua", spa: "Spanish"}


