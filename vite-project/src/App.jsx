import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import style from './App.module.css';
import Header from './components/Header/Header';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetails = lazy(() => import('./pages/MovieDetailsPage/MovieDetails'));
const MovieCast = lazy(() => import('./components/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./components/MovieReviews/MovieReviews'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage')); 

function App() {

  const location = useLocation();

  const isNotFoundPage = location.pathname === "/not-found";
  return (
    <>
      {!isNotFoundPage && <Header />}
      <main className={style.main}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="/not-found" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/not-found" replace />}  />
          </Routes>
        </Suspense>
      </main>
    </>
  );
}

export default App;
