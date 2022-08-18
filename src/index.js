import './css/styles.css';
import debounce from 'lodash.debounce';

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

function fetchCountries(name) {
  const r = fetch(`https://restcountries.com/v3.1/name/${name}`).then(data => {
    console.log(data);
  });
}

// fetchCountries('peru');

function onInputSearch(e) {
  const result = fetchCountries(e.target.value);
  console.log(result);
}
