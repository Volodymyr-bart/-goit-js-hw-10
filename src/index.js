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
  refs.countryList.innerHTML = ``;
  refs.countryInfo.innerHTML = ``;
  if (name === ``) {
    console.log('Need more symbols');
  } else {
    fetchCountries(name)
      .then(country => {
        if (country.length > 10) {
          console.log('need more params');
        } else if (country.length > 2 && country.length < 10) {
          console.log('norm');
        } else if (country.length === 1) {
          console.log('ok');
          templateOneCountry(country);
          refs.countryInfo.innerHTML = templateOneCountry(country);
          // const flagImg = country[0].flags.png;
          // console.log(flagImg);
          // refs.background.style.backgroundImage = `url(${flagImg})`;
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
