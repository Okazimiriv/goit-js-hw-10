import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;
const searchCountries = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchCountries.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
  const value = searchCountries.value.trim();

  fetchCountries(value)
    .then(name => (countryList.innerHTML = createMarkup(name)))
    .catch(err => console.log(err));
}

function createMarkup(arr) {
  return arr
    .map(
      ({ name: { official }, flags: { svg, alt } }) => `<li>
      <img src="${svg}" alt="${alt}" width="50px">
      <p>${official}</p>
  </li>`
    )
    .join('');
}
