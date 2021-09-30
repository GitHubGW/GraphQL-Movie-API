## GraphQL Movie API

#### index.js

```javascript
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("http://localhost:4000"));
```

#### schema.graphql

```javascript
type Movie {
  id: Int!
  name: String!
  rating: Int!
}

type Query {
  movies: [Movie]!
  movie(id: Int!): Movie
}

type Mutation {
  addMovie(name: String!, rating: Int!): Movie
  deleteMovie(id: Int!): Boolean
}
```

#### resolvers.js

```javascript
import { getAllMovies, getMovieById, addMovieByNameRating, deleteMovieById } from "./db";

const resolvers = {
  Query: {
    movies: () => getAllMovies(),
    movie: (root, { id }) => getMovieById(id),
  },
  Mutation: {
    addMovie: (root, { name, rating }) => addMovieByNameRating(name, rating),
    deleteMovie: (root, { id }) => deleteMovieById(id),
  },
};

export default resolvers;

```

#### db.js

```javascript
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
```
