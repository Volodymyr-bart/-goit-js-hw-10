import './css/styles.css';
import debounce from 'lodash.debounce';
import templateOneCountry from './templateOneCountry';
import fetchCountries from './fetchCountries';

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

// console.log(fetchCountries('ukr'));

function onInputSearch(e) {
  let name = e.target.value.trim();
  if (name === ``) {
    console.log('Need more symbols');
  } else {
    fetchCountries(name)
      .then(county => {
        if (county.length > 10) {
          console.log('need more params');
        } else if (county.length > 2 && county.length < 10) {
          console.log('norm');
        } else if (county.length === 1) {
          console.log('ok');
          templateOneCountry(county);
        } else {
          console.log('Not find');
        }
      })
      .catch(error => {
        return error;
      });
  }

  // console.log(find);

  // console.log(fetchCountries(name));
}
