export default function fetchCountries(name) {
  const searchDate = `fields=name,capital,population,flags,languages `;
  return fetch(
    `https://restcountries.com/v3.1/name/${name}?${searchDate}`
  ).then(response => {
    return response.json();
  });
}
