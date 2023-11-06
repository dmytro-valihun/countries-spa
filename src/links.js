const BASE_URL = 'https://restcountries.com/v3.1/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const ALL_COUNTRIES_DETAILED_INFO = BASE_URL + 'all';

export const filterByCountry = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');