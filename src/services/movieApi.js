import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const AUTH_TOKEN = '6f1bc6aab5795c267839d2d6fa4537b9';

//type 'day' or 'week'
export const getMoviesTrending = async type => {
  const response = await axios.get(
    `/trending/movie/${type}?api_key=${AUTH_TOKEN}&language=en-US&include_adult=false`
  );

  return response.data;
};

export const getSearchMovie = async query => {
  const response = await axios.get(
    `search/movie?api_key=${AUTH_TOKEN}&query=${query}&language=en-US&include_adult=false`
  );
  return response.data;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `movie/${id}?api_key=${AUTH_TOKEN}&language=en-US&append_to_response=credits,reviews`
  );
  return response;
};