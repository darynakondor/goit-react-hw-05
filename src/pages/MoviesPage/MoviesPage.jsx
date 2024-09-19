import { useEffect, useState } from "react";
import { requestMoviesBySearchValue } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import style from './MoviesPage.module.css';
import { useSearchParams } from "react-router-dom";

function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams(); 
  const [searchValue, setSearchValue] = useState(searchParams.get('query') || ''); 
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const query = searchParams.get('query'); 
    if (query) {
      const fetchMovies = async () => {
        try {
          const data = await requestMoviesBySearchValue(query); 
          setMovies(data.results);
        } catch (error) {
          setError(error.message);
        }
      };

      fetchMovies();
    }
  }, [searchParams]);

  const handleSearch = () => {
    setSearchParams({ query: searchValue }); 
  };

  return (
    <div className='container'>
      <div className={style.flex}>
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for movies"
          className={style.inp}
        />
        <button 
          disabled={!searchValue.trim()} 
          className={style.btn} 
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      {error && <p className={style.error}>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
