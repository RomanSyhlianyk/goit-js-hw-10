const BASE_URL = 'https://restcountries.com/v3.1/name/';
const FIELDS = 'name,capital,population,flags,languages';
export function getCountries(name) {
  return fetch(`${BASE_URL}${name}?fields=${FIELDS}`).then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(response.statusText);
  });
}
