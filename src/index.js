import './css/styles.css';
import debounce from 'lodash.debounce';
import templateCountries from './templateCountries';
import templateOneCountry from './templateOneCountry';
import fetchCountries from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const refs = {
  inputField: document.querySelector(`#search-box`),
  countryList: document.querySelector(`.country-list`),
  countryInfo: document.querySelector(`.country-info`),
  background: document.querySelector(`.background`),
};

refs.inputField.addEventListener(
  `input`,
  debounce(onInputSearch, DEBOUNCE_DELAY)
);

function onInputSearch(e) {
  let name = e.target.value.trim();
  refs.countryList.innerHTML = ``;
  refs.countryInfo.innerHTML = ``;
  if (name === ``) {
    Notiflix.Notify.info(
      'Too many matches found. Please enter a more specific name.'
    );
  } else {
    fetchCountries(name)
      .then(country => {
        if (country.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (country.length > 2 && country.length < 10) {
          for (let i = 0; i < country.length; i += 1) {
            refs.countryList.insertAdjacentHTML(
              `beforeend`,
              templateCountries(country[i])
            );
          }
        } else if (country.length === 1) {
          refs.countryInfo.innerHTML = templateOneCountry(country);
        } else {
          Notiflix.Notify.failure('Oops, there is no country with that name');
        }
      })
      .catch(error => {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        return error;
      });
  }
}
