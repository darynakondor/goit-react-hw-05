import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieCast } from '../../services/api'; // Функція для отримання акторського складу з бекенду
import style from './MovieCast.module.css';

function MovieCast() {
  const { movieId } = useParams(); // Використання useParams для отримання movieId
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const castData = await requestMovieCast(movieId);
        setCast(castData.cast);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieCast();
  }, [movieId]);
  return (
    <ul className={style.list}>
      {Array.isArray(cast) && cast.map((member) => (
        <li className={style.item} key={member.cast_id}>
          <div className={style.imgContainer}>
            <img 
              className={style.img} 
              src={member.profile_path ? `https://image.tmdb.org/t/p/w500${member.profile_path}` : 'https://via.placeholder.com/500x750?text=No+Image'} 
              alt={member.name} 
            />
          </div>
          <div className={style.name}>
            <p>{member.name}</p> 
            <p>Character: {member.character}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
