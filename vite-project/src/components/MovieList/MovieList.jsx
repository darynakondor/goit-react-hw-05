import { useEffect, useState } from "react";
import { requestTrendingMovies } from "../../services/api";
import { Link } from "react-router-dom";
import style from './MovieList.module.css';

function MovieList({ movies }) {
  const [localMovies, setLocalMovies] = useState(movies);

  useEffect(() => {
    if (!movies) {
      const getTrendingMovies = async () => {
        try {
          const data = await requestTrendingMovies();
          setLocalMovies(data.results);
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };
      getTrendingMovies();
    } else {
      setLocalMovies(movies);
    }
  }, [movies]);

  return (
    <ul className={style.list}>
      {Array.isArray(localMovies) &&
        localMovies.map((movie) => (
          <li className={style.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state="/">{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}

export default MovieList;
