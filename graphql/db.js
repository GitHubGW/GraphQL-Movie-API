import axios from "axios";

const API_MOVIE = "https://yts.mx/api/v2/list_movies.json";
const API_MOVIE_DETAIL = "https://yts.mx/api/v2/movie_details.json";
const API_MOVIE_SUGGESTIONS = "https://yts.mx/api/v2/movie_suggestions.json";

export const getAllMovies = async () => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(`${API_MOVIE}`);

  return movies;
};

export const getMovieById = async (id) => {
  const {
    data: {
      data: { movie },
    },
  } = await axios.get(`${API_MOVIE_DETAIL}?movie_id=${id}`);

  return movie;
};

export const getSuggestionsMoviesById = async (id) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(`${API_MOVIE_SUGGESTIONS}?movie_id=${id}`);

  return movies;
};

export const getMoviesByPage = async (page) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(`${API_MOVIE}?page=${page}`);

  return movies;
};

export const getMoviesByRating = async (rating) => {
  const {
    data: {
      data: { movies },
    },
  } = await axios.get(`${API_MOVIE}?minimum_rating=${rating}`);

  return movies;
};
