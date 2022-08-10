import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar, Navigation } from 'components';

const loader = componentName => {
  return lazy(() =>
    import(`./pages/${componentName}/${componentName}`).then(module => ({
      default: module[componentName],
    }))
  );
};
const Layout = loader('Layout');
const HomePage = loader('HomePage');
const MoviesPage = loader('MoviesPage');
const MovieDetailsPage = loader('MovieDetailsPage');

function App() {
  return (
    <>
      <AppBar>
        <Navigation />
      </AppBar>
      <Suspense fallback="">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId/*" element={<MovieDetailsPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
