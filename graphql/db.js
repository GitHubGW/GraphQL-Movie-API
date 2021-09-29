let movieArray = [
  {
    id: 1,
    name: "Star Wars",
    rating: 6,
  },
  {
    id: 2,
    name: "Avengers",
    rating: 9,
  },
  {
    id: 3,
    name: "The Ring",
    rating: 7,
  },
];

export const getAllMovies = () => movieArray;

export const getMovieById = (id) => {
  const filteredMovie = movieArray.filter((movieObject) => movieObject.id === id);
  return filteredMovie[0];
};

export const addMovieByNameRating = (name, rating) => {
  const newMovie = {
    id: movieArray.length + 1,
    name,
    rating,
  };
  movieArray.push(newMovie);
  return newMovie;
};

export const deleteMovieById = (id) => {
  const filteredMovie = movieArray.filter((movieObject) => movieObject.id !== id);

  if (movieArray.length) {
    movieArray = filteredMovie;
    return true;
  } else {
    return false;
  }
};

export default movieArray;
