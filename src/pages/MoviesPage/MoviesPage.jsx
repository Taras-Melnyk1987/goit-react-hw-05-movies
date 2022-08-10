import React from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { MoviesGallery, MovieCard, Card, Button, Loader } from 'components';
import { MoviesPageStyles, Form, Input } from './MoviePage.styled';
import * as movieApi from '../../services/movieApi';
import toast, { Toaster } from 'react-hot-toast';

export const MoviesPage = () => {
  const inputRef = useRef(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchQuery = searchParams.get('query');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ query: inputRef.current.value.toLowerCase() });
    //inputRef.current.value = '';
  }

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    setMovies([]);
    try {
      async function getMoviesByQuery() {
        const data = await movieApi.getSearchMovie(searchQuery);
        if (data.total_results === 0) {
          toast.error(`No movies on query ${searchQuery}!`);
          setLoading(false);
          return;
        }
        setMovies(data.results);
        setLoading(false);
      }
      getMoviesByQuery();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [searchQuery]);
  return (
    <MoviesPageStyles>
      <Form onSubmit={handleSubmit}>
        <Input ref={inputRef} type="text" placeholder="Enter title of movie" />
        <Button type="submit" text="Search" />
      </Form>
      {loading && <Loader />}
      {movies && (
        <MoviesGallery>
          {movies.map(item => (
            <Card key={item.id}>
              <Link to={`${item.id}`} state={{ from: location }}>
                <MovieCard details={item} />
              </Link>
            </Card>
          ))}
        </MoviesGallery>
      )}
      <Toaster />
    </MoviesPageStyles>
  );
};
