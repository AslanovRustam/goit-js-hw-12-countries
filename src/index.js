import './styles.css';
import countryCard from './country-template.hbs';
import debounce from 'lodash.debounce';

// console.log(countryCard())
const cardContainer = document.querySelector('.js-card-container');
const inputValue = document.querySelector('.input-search');

// inputValue.addEventListener('input', onSearch)
// inputValue.addEventListener('input', debounce(() => { onSearch(); }, 500));
inputValue.addEventListener('input', debounce(onSearch, 500));

function onSearch(e) {
    e.preventDefault();  
    // const form = e.currentTarget;
    const form = inputValue;
    // const form = e.currentTarget.elements.query.value;
    const searchCountry = form.value;
    //  const searchCountry = form.elements.query.value;
    fetchCountryByName(searchCountry)
    .then(renderCountryCard)
    .catch(error => console.log(error));
}

function renderCountryCard(country) {
    const markup = countryCard(country[0]);
    cardContainer.innerHTML = markup;
};

function fetchCountryByName(countryName) {
   return fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(response => {
    return response.json();
    })
    // .then(renderCountryCard)
    // .catch (error => console.log(error)); 
};