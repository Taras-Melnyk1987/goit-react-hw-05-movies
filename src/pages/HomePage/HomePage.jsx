import { useState, useEffect } from 'react';
import * as movieApi from '../../services/movieApi';
import { HomeStyles, Title } from './HomePage.styled';
import { MoviesGallery, MovieCard, Card, Loader } from 'components';
import { Link, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const HomePage = () => {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const data = await movieApi.getMoviesTrending('day');

        setTrends(prevTrends => [...prevTrends, ...data.results]);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <HomeStyles>
      <Title>Daily Trending</Title>
      <Toaster />
      {loading && <Loader />}
      {trends.length > 0 && (
        <MoviesGallery>
          {trends.map(item => (
            <Card key={item.id}>
              <Link to={`movies/${item.id}`} state={{ from: location }}>
                <MovieCard details={item} />
              </Link>
            </Card>
          ))}
        </MoviesGallery>
      )}
    </HomeStyles>
  );
};
