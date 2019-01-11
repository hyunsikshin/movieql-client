import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  query {
    movies(limit: 30, rating: 7.5) {
      id
      title
      genres
      rating
      medium_cover_image
    }
  }
`;

export const MOVIE_DETAILS = gql`
  query getMovie($movieId: Int!) {
    movie(id: $movieId) {
      id
      title
      genres
      rating
      medium_cover_image
      description_full
    }
    suggestions(id: $movieId) {
      id
      title
      genres
      rating
      medium_cover_image
      description_full
    }
  }
`;
