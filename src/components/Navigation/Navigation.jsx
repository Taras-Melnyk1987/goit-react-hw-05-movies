import { NavLink } from 'react-router-dom';
import { NavListLinks } from './Navigation.styled';

const Navigation = () => (
  <nav>
    <NavListLinks>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="movies">Movies</NavLink>
      </li>
    </NavListLinks>
  </nav>
);

export { Navigation };
