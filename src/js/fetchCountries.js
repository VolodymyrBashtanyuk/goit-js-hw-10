const URL = 'https://restcountries.com/v2'

export default class ApiCountries {
    constructor() {
        // this.name = '';
    }
     
    fetchCountries(name) {
        
        return fetch(`${URL}/name/${name}?fields=name,capital,population,flags,languages`)
        .then(response => response.json())
        .then(dataCountries => dataCountries);
    };
    

};
    


// name.official - полное имя страны name
// capital - столица capital:
// population - население population
// flags.svg - ссылка на изображение флага flags:
// languages - массив языков languages: {aym: "Aymara", que: "Quechua", spa: "Spanish"}


