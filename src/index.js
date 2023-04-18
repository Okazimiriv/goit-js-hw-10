import './css/styles.css';

const DEBOUNCE_DELAY = 300;
const BASE_URL = 'https://restcountries.com/v3.1/name/';
// const searchParams = new URLSearchParams({
//   fields: 'name,capital,population,flags,languages',
// });

function fetchCountries(name) {
  return fetch(
    `${BASE_URL}${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

fetchCountries('ukraine')
  .then(name => console.log(name))
  .catch(err => console.log(err));
