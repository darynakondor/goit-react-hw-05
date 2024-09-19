import { useContext } from "react";
import { MovieContext } from "../../context/MovieContext";
import style from './MovieReviews.module.css';

function MovieReviews() {

  const {reviews} = useContext(MovieContext);
  return (
    <ul className={style.list}>
      {Array.isArray(reviews) && reviews.map((review) => (
        <li className={style.item} key={review.id}>
          <p className={style.author}> Author: {review.author}</p>
          <p className={style.contetnt}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
