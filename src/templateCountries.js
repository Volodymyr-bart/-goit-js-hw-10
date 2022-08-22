export default function templateCountries({
  name: { official },
  flags: { svg },
}) {
  return `<li class = "list-item"> <img src="${svg}" alt="flag" width="40" height="30" class="item-img" /><span
  class="item-name"
>${official}</span></li>`;
}
