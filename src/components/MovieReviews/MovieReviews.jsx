import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestMovieReviews } from '../../services/api'; 
import style from './MovieReviews.module.css';

function MovieReviews() {
  const { movieId } = useParams(); 
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const reviewsData = await requestMovieReviews(movieId);
        setReviews(reviewsData.results);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMovieReviews();
  }, [movieId]); 

  if (error) {
    return <p className={style.error}>Error: {error}</p>;
  }

  if (reviews.length === 0) {
    return <p className={style.noReviews}>No reviews available.</p>;
  }

  return (
    <ul className={style.list}>
      {Array.isArray(reviews) && reviews.map((review) => (
        <li className={style.item} key={review.id}>
          <p className={style.author}>Author: {review.author}</p>
          <p className={style.content}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default MovieReviews;
