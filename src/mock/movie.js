import {getRandomArrayElement, getRandomInteger, getNamesAndSurnames, getRandomDate, getRandomArrayElements} from '../utils.js';
import {DESCRIPTIONS, TITLES, GENRES, POSTERS, COUNTRIES} from '../const.js';

const mockMovies = [
  {
    id: getRandomInteger(1, 200),
    comments: ['1', '2', '4'],
    filmInfo: {
      title: getRandomArrayElement(TITLES),
      alternativeTitle: getRandomArrayElement(TITLES),
      totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
      poster: getRandomArrayElement(POSTERS),
      ageRating: getRandomInteger(0, 18),
      director: getNamesAndSurnames(),
      writers: getNamesAndSurnames(getRandomInteger(1, 3)),
      actors: getNamesAndSurnames(getRandomInteger(1, 3)),
      release: {
        date: getRandomDate(),
        releaseCountry: getRandomArrayElement(COUNTRIES),
      },
      duration: getRandomInteger(50, 150),
      genre: GENRES.slice(0, getRandomInteger(1, 2)),
      description: getRandomArrayElements(DESCRIPTIONS),
    },
    userDetails: {
      watchlist: true,
      alreadyWatched: true,
      watchingDate: getRandomDate(),
      favorite: false,
    }
  },
  {
    id: getRandomInteger(1, 200),
    comments: ['2'],
    filmInfo: {
      title: getRandomArrayElement(TITLES),
      alternativeTitle: getRandomArrayElement(TITLES),
      totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
      poster: getRandomArrayElement(POSTERS),
      ageRating: getRandomInteger(0, 18),
      director: getNamesAndSurnames(),
      writers: getNamesAndSurnames(getRandomInteger(1, 3)),
      actors: getNamesAndSurnames(getRandomInteger(1, 3)),
      release: {
        date: getRandomDate(),
        releaseCountry: getRandomArrayElement(COUNTRIES),
      },
      duration: getRandomInteger(50, 150),
      genre: [getRandomArrayElement(GENRES)],
      description: getRandomArrayElements(DESCRIPTIONS),
    },
    userDetails: {
      watchlist: false,
      alreadyWatched: false,
      watchingDate: false,
      favorite: true,
    }
  },
  {
    id: getRandomInteger(1, 200),
    comments: ['4', '3', '2', '1'],
    filmInfo: {
      title: getRandomArrayElement(TITLES),
      alternativeTitle: getRandomArrayElement(TITLES),
      totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
      poster: getRandomArrayElement(POSTERS),
      ageRating: getRandomInteger(0, 18),
      director: getNamesAndSurnames(),
      writers: getNamesAndSurnames(getRandomInteger(1, 3)),
      actors: getNamesAndSurnames(getRandomInteger(1, 3)),
      release: {
        date: getRandomDate(),
        releaseCountry: getRandomArrayElement(COUNTRIES),
      },
      duration: getRandomInteger(50, 150),
      genre: [getRandomArrayElement(GENRES)],
      description: getRandomArrayElements(DESCRIPTIONS),
    },
    userDetails: {
      watchlist: new Boolean(getRandomInteger(0,1)),
      alreadyWatched: false,
      watchingDate: false,
      favorite: new Boolean(getRandomInteger(0,1)),
    }
  },
  {
    id: getRandomInteger(1, 200),
    comments: [],
    filmInfo: {
      title: getRandomArrayElement(TITLES),
      alternativeTitle: getRandomArrayElement(TITLES),
      totalRating: `${getRandomInteger(0, 9)}.${getRandomInteger(0, 9)}`,
      poster: getRandomArrayElement(POSTERS),
      ageRating: getRandomInteger(0, 18),
      director: getNamesAndSurnames(),
      writers: getNamesAndSurnames(getRandomInteger(1, 3)),
      actors: getNamesAndSurnames(getRandomInteger(1, 3)),
      release: {
        date: getRandomDate(),
        releaseCountry: getRandomArrayElement(COUNTRIES),
      },
      duration: getRandomInteger(50, 150),
      genre: [getRandomArrayElement(GENRES)],
      description: getRandomArrayElements(DESCRIPTIONS),
    },
    userDetails: {
      watchlist: new Boolean(getRandomInteger(0,1)),
      alreadyWatched: true,
      watchingDate: getRandomDate(),
      favorite: new Boolean(getRandomInteger(0,1)),
    }
  }
];

function getRandomFilm() {
  return getRandomArrayElement(mockMovies);
}

export {getRandomFilm};
