import { getAllMovies, getMovieById, getSuggestionsMoviesById, getMoviesByPage, getMoviesByRating } from "./db";

const resolvers = {
  Query: {
    movies: () => getAllMovies(),
    movieById: (_, { id }) => getMovieById(id),
    suggestionsMoviesById: (_, { id }) => getSuggestionsMoviesById(id),
    moviesByPage: (_, { page }) => getMoviesByPage(page),
    moviesByRating: (_, { rating }) => getMoviesByRating(rating),
  },
};

export default resolvers;
