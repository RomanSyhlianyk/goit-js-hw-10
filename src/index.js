import './css/styles.css';
import { getCountries } from './fetchCountries';
import { murkupCountries, murkupCountry } from './markup';
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryInfo: document.querySelector('.country-info'),
};
refs.input.addEventListener('input', debounce(getCountryDesc, DEBOUNCE_DELAY));

function getCountryDesc(e) {
  const value = e.target.value.trim();
  if (!value) {
    removeContent();
    return;
  }
  getCountries(value)
    .then(counrty => {
      if (counrty.length === 1) {
        const markup = murkupCountry(counrty);

        removeContent();
        refs.countryInfo.innerHTML = markup;
      } else if (counrty.length >= 2 && counrty.length <= 10) {
        const markup = murkupCountries(counrty);
        removeContent();
        refs.countryList.innerHTML = markup;
      } else {
        removeContent();
        Notiflix.Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    });
}
function removeContent() {
  refs.countryInfo.innerHTML = '';
  refs.countryList.innerHTML = '';
}
