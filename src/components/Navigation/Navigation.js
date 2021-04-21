import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import PropTypes from 'prop-types';
import s from './Navigation.module.scss';

const Navigation = ({ isAuthenticated }) => (
  <ul className={s.list}>
    <li>
      <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
        Home
      </NavLink>
    </li>
    {isAuthenticated && (
      <li>
        <NavLink
          to="/contacts"
          className={s.link}
          activeClassName={s.activeLink}
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
