import style from './NotFoundPage.module.css';
import { Link} from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container">
      <h1 className={style.title}>Not found page</h1>
      <p className={style.text}>Go to the main page:</p> <Link to={'/'}>Home</Link>
    </div>  
  )
}

export default NotFoundPage