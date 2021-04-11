import { NavLink } from 'react-router-dom';

// const styles = {
//   link: {
//     display: 'inline-block',
//     textDecoration: 'none',
//     padding: 12,
//     fontWeight: 700,
//     color: '#2A363B',
//   },
//   activeLink: {
//     color: '#E84A5F',
//   },
// };

const Navigation = () => (
  <ul className="mainNav nav-item">
    <li>
      <NavLink exact to="/" className="navLink" activeClassName="navLinkActive">
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contacts"
        className="navLink"
        activeClassName="navLinkActive"
      >
        Contacts
      </NavLink>
    </li>
  </ul>
);

export default Navigation;
