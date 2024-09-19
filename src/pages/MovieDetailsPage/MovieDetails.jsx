import { useEffect, useState, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { requestMovieDetails } from '../../services/api';
import style from './MovieDetails.module.css';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  
  const location = useLocation();
  const backLinkRef = useRef(location.state?.from ?? "/movies"); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await requestMovieDetails(movieId);

        setMovie(movieData);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  return (
    <div className='container'>
      <Link className={style.btn} to={backLinkRef.current}>Go back</Link> 
      {movie ? (
        <>
          <div className={style.flexContainer}>
            <img className={style.img} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <div className={style.info}>
              <h2 className={style.title}>{movie.title} ({movie.release_date.substring(0, 4)})</h2>
              <p className={style.userScore}>User Score: {Math.round(movie.vote_average * 10)}%</p>
              <p className={style.titleOverview}>Overview</p>
              <p className={style.textOverview}>{movie.overview}</p>
              <p className={style.titleGenres}>Genres</p>
              <p className={style.textGenres}>
                {movie.genres.map((genre) => genre.name).join(', ')}
              </p>
            </div>
          </div>
          <div className={style.additional}>
            <p className={style.additionalInfo}>Additional information</p>
            <ul className={style.listLinks}>
              <li className={style.item}>
                <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
              </li>
              <li className={style.item}>
                <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
            <Outlet />
        </>
      ) : ''}
    </div>
  );
}

export default MovieDetails;