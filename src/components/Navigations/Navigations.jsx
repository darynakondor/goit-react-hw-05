import style from './Navigations.module.css';
import clsx from 'clsx';
import { NavLink } from "react-router-dom";

const buildLinkClass = ({ isActive }) => {
    return clsx(style.link, isActive && style.active);
};
function Navigations() {
  return (
    <header className={style.header}>
        <div className="container">
            <nav className={style.nav}>
                <NavLink to="/" className={buildLinkClass}>
                  Home
                </NavLink>
                <NavLink to="/movies" className={buildLinkClass}>
                  Movies
                </NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Navigations