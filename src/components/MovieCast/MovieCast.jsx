import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import style from './MovieCast.module.css';

function MovieCast() {

  const { cast } = useContext(MovieContext);
  return (
    <ul className={style.list}>
      {Array.isArray(cast) && cast.map((member) => (
        <li className={style.item} key={member.cast_id}>
          <div className={style.imgContainer}><img className={style.img} src={`https://image.tmdb.org/t/p/w500${member.profile_path}`} alt={member.name} /></div>
          <div className={style.name}><p>{member.name}</p> <p>Character: {member.character}</p></div>
        </li>
      ))}
    </ul>
  );
}

export default MovieCast;
