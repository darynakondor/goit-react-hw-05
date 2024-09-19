import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { requestTrendingMovies } from '../../services/api';
import style from './HomePage.module.css';

function HomePage() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await requestTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        setError('Error fetching movies:', error);
      }
    };

    getTrendingMovies();
  }, []); 

  return (
    <div className='container'>
      <h1 className={style.title}>Popular Movies</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
