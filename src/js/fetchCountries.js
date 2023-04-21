const BASE_URL = 'https://restcountries.com/v3.1/name/';
const searchParams = new URLSearchParams({
  fields: 'name,capital,population,flags,languages',
});

export function fetchCountries(name) {
  return fetch(`${BASE_URL}${name}?${searchParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    console.log(response);
    return response.json();
  });
}

// fetchCountries('ukraine')
//   .then(name => console.log(name))
//   .catch(err => console.log(err));
