import { COUNTRIES } from '../constants';
import getRandomNumber from './getRandomNumber';

const createCountriesRoster = (size, region) => {
  const countriesRoster = [];
  const countriesNumber = COUNTRIES[region].length - 1;

  while (countriesRoster.length < size) {
    const randomCountry = COUNTRIES[region][getRandomNumber(countriesNumber)];

    const isInRoster = countriesRoster.find(
      item => item.name === randomCountry.name
    );

    if (!isInRoster) {
      countriesRoster.push(randomCountry);
    }
  }

  return countriesRoster;
};

export default createCountriesRoster;
