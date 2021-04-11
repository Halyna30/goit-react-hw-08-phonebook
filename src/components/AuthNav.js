import { NavLink } from 'react-router-dom';
import routes from '../routes';

const AuthNav = () => (
  <ul className="usermenu nav-item">
    <li>
      <NavLink
        exact
        to={routes.register}
        className="navLink"
        activeClassName="navLinkActive"
      >
        Register
      </NavLink>
    </li>
    <li>
      <NavLink
        exact
        to={routes.login}
        className="navLink"
        activeClassName="navLinkActive"
      >
        Login
      </NavLink>
    </li>
  </ul>
);

export default AuthNav;
