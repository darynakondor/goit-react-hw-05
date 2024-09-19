import MovieList from '../../components/MovieList/MovieList';
import style from './HomePage.module.css';

function HomePage() {
  
  return  (
    <div className='container'>
      <h1 className={style.title}>Popular movies</h1>
      <MovieList/>
    </div>
  )
}

export default HomePage