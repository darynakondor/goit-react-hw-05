import { useEffect, useState } from "react";
import { requestTrendingMovies } from "../../services/api";
import { Link, useLocation } from "react-router-dom";
import style from './MovieList.module.css';

function MovieList({ movies }) {
  const location = useLocation();

  return (
    <ul className={style.list}>
      {Array.isArray(movies) &&
        movies.map((movie) => (
          <li className={style.item} key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>{movie.title}</Link>
          </li>
        ))}
    </ul>
  );
}

export default MovieList;
