import { API_KEY } from '../utils/apiKey';

import PropTypes from 'prop-types';

export const fetchTrendMovies = async () => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const resposeTrendMovies = await respose.json();
  return resposeTrendMovies.results;
};

export const fetchSearchMovie = async (searchName, page) => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchName}&page=${page}&include_adult=false`
  );
  const resposeSearchMovies = await respose.json();

  return resposeSearchMovies.results;
};

export const fetchMovieDetails = async movieId => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  );
  const resposeMovieDetails = await respose.json();
  return resposeMovieDetails;
};

export const fetchMovieCast = async movieId => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
  );
  const { cast } = await respose.json();
  return cast;
};
export const fetchMovieReviews = async movieId => {
  const respose = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const { results } = await respose.json();
  return results;
};

fetchSearchMovie.propTypes = {
  searchName: PropTypes.string,
  page: PropTypes.number,
};

fetchMovieDetails.propTypes = {
  movieId: PropTypes.number,
};
fetchMovieCast.propTypes = {
  movieId: PropTypes.number,
};
fetchMovieReviews.propTypes = {
  movieId: PropTypes.number,
};
