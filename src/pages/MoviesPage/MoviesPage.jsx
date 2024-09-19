import { useState } from "react";
import { requestMoviesBySearchValue } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";
import style from './MoviesPage.module.css';

function MoviesPage() {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await requestMoviesBySearchValue(searchValue);
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
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
        <button disabled={!searchValue.trim()} className={style.btn} onClick={handleSearch}>Search</button>
      </div>
      <MovieList movies={movies} />
    </div>
  );
}

export default MoviesPage;
