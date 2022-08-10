import { useState, useEffect } from 'react';
import {
  Link,
  Outlet,
  Route,
  Routes,
  useParams,
  useLocation,
} from 'react-router-dom';
import * as movieApi from '../../services/movieApi';
import {
  MovieOverview,
  MovieAdditionalInfo,
  AdditionalInfoLayout,
  Cast,
  Reviews,
  Button,
  Loader,
} from 'components';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { MovieDetailsStyles } from './MovieDetailsPage.styled';

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    async function fetchMovieById() {
      try {
        const response = await movieApi.getMovieDetails(movieId);
        const data = response.data;
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchMovieById();
  }, [movieId]);

  return (
    <MovieDetailsStyles>
      {loading && <Loader />}
      {movie && (
        <>
          <Link to={location?.state?.from ?? `/`} state={{ from: location }}>
            <Button
              type="button"
              text="Go back"
              icon={<FaRegArrowAltCircleLeft />}
            />
          </Link>

          <MovieOverview info={movie} />
          <MovieAdditionalInfo location={location?.state?.from} />

          <Routes>
            <Route path="cast" element={<Cast cast={movie.credits.cast} />} />
            <Route
              path="reviews"
              element={<Reviews reviews={movie.reviews} />}
            />
          </Routes>

          <AdditionalInfoLayout>
            <Outlet />
          </AdditionalInfoLayout>
        </>
      )}
    </MovieDetailsStyles>
  );
};
