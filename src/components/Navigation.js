import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../Redux/auth/auth-selectors';

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

const Navigation = ({ isAuthenticated }) => (
  <ul className="mainNav nav-item">
    <li>
      <NavLink exact to="/" className="navLink" activeClassName="navLinkActive">
        Home
      </NavLink>
    </li>
    {isAuthenticated && (
      <li>
        <NavLink
          to="/contacts"
          className="navLink"
          activeClassName="navLinkActive"
        >
          Contacts
        </NavLink>
      </li>
    )}
  </ul>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
