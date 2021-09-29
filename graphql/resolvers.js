import { getAllMovies, getMovieById, addMovieByNameRating, deleteMovieById } from "./db";

const resolvers = {
  Query: {
    movies: () => getAllMovies(),
    movie: (object, { id }) => getMovieById(id),
  },
  Mutation: {
    addMovie: (object, { name, rating }) => addMovieByNameRating(name, rating),
    deleteMovie: (object, { id }) => deleteMovieById(id),
  },
};

export default resolvers;
