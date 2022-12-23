export function murkupCountries(arr) {
  return arr
    .map(({ name, flags }) => {
      // console.log(name.official);
      return `<li class="country-list-item">
            <img class="country-list-img" src="${flags.svg}" alt="${name.official}" width=180/>
            <p class="country-list-desc">${name.official}</p>
        </li>`;
    })
    .join('');
}
export function murkupCountry(arr) {
  return arr
    .map(({ name, capital, population, flags, languages }) => {
      return `<div>
      <img class="country-info-img" src="${flags.svg}" alt="${
        name.official
      }" width=180 />
      <p>${name.official}</p>
    </div>
    <ul class="country-info-list">
        <li class="country-info-list-item">Capital: ${capital[0]}</li>
        <li class="country-info-list-item">Population: ${population}</li>
        <li class="country-info-list-item">Languages: ${Object.values(languages).join(', ')}</li>
    </ul>`;
    })
    .join('');
}
