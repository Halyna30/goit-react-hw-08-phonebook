import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import PropTypes from 'prop-types';
import Toolbar from '@material-ui/core/Toolbar';

const Navigation = ({ isAuthenticated }) => (
  <ul>
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

Navigation.propTypes = {
  isAuthenticated: PropTypes.string,
};

export default connect(mapStateToProps)(Navigation);
