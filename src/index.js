import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const DEBOUNCE_DELAY = 300;
const searchCountries = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

searchCountries.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch(evt) {
  const value = searchCountries.value.trim();

  if (!value) {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
    return;
  }

  fetchCountries(value)
    .then(nameCountrie => {
      if (nameCountrie.length > 10) {
        Notify.info(
          'Too many matches found. Please, enter a more specific name.',
          { position: 'center-top' }
        );
      }
      createResult(nameCountrie);
    })

    .catch(err => {
      // if (err.massage === '404') {
      Notify.failure('Oops, there is no country with that name', {
        position: 'center-top',
      });
      // }
      countryList.innerHTML = '';
      countryInfo.innerHTML = '';
      searchCountries.value = '';
      console.error(err);
    });
}

function createResult(nameCountrie) {
  console.log(nameCountrie);

  if (nameCountrie.length === 1) {
    createCountryInfo(nameCountrie);
  } else if (nameCountrie.length >= 2 && nameCountrie.length <= 10) {
    createCountryList(nameCountrie);
  }
}

function createCountryList(nameCountrie) {
  countryInfo.innerHTML = '';
  const catalogCountry = nameCountrie
    .map(
      ({ name: { official }, flags: { svg, alt } }) => `<li class="list-text">
      <img src="${svg}" alt="${alt}" width="30px">
      <p><b>${official}</b></p>
  </li>`
    )
    .join('');

  countryList.innerHTML = catalogCountry;
  return catalogCountry;
}

function createCountryInfo(nameCountrie) {
  countryList.innerHTML = '';
  const cardMarkup = nameCountrie
    .map(
      ({
        name: { official },
        flags: { svg, alt },
        population,
        capital,
        languages,
      }) => `
      <li><img src="${svg}" alt="${alt}" width="50px">
      <h2><b>${official}</b></h2></li>
      <p class="card-text"><b>Capital:</b> ${capital}</p>
      <p class="card-text"><b>Population:</b> ${population}</p>
      <p class="card-text"><b>Languages:</b> ${Object.values(languages)}</p>
  `
    )
    .join('');
  countryInfo.innerHTML = cardMarkup;
  return nameCountrie;
}
