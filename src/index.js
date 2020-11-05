import './styles.css';
import countryCard from './country-template.hbs';

// console.log(countryCard())
fetch('https://restcountries.eu/rest/v2/name/ukraine').then(response => {
    return response.json();
}).then(country => {console.log(country); const markup = countryCard(country[0]); console.log(markup);} ).catch(error => console.log(error));
