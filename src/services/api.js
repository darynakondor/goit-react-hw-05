import axios from "axios";

const bearerToken = import.meta.env.VITE_ACCESS_TOKEN; 

const options = {
  headers: {
    Authorization: `Bearer ${bearerToken}`, 
  }
};

export const requestMoviesBySearchValue = async (searchValue) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; 
  }
};

export const requestTrendingMovies = async () => {
  const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US`

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error; 
  }
};

export const requestMovieDetails = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    throw error; 
  }
};

export const requestMovieCast = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`;
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie cast:", error);
    throw error; 
  }
};

export const requestMovieReviews = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`;
  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie reviews:", error);
    throw error; 
  }
};
