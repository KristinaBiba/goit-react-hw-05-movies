import { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";

import Movies from '../../pages/Movies/Movies';
import { Header, StyledLink, Main } from "./App_css";
const Home = lazy(() => import('../../pages/Home/Home'));
const MovieDetails = lazy(() => import('../../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Cast/Cast'));
const Reviews = lazy(() => import('../Reviews'));


export const App = () => {
  return (
    <>
      <Header>
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>

      <Main>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movies" element={<Movies />}/>
                  <Route path="/movies/:movieId" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast />} />
                    <Route path="reviews" element={<Reviews />} />
                  </Route>
                  <Route path="*" element={<div>Not found</div>} />
                </Routes>
            </Suspense>
      </Main>
  </>
  );
};
