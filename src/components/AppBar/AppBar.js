import { connect } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import AuthNav from '../AuthNav/AuthNav';
import UserMenu from '../UserMenu';
import PropTypes from 'prop-types';
import authSelectors from '../../Redux/auth/auth-selectors';

const AppBar = ({ isAuthenticated }) => (
  <header className="header">
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

AppBar.propTypes = {
  isAuthenticated: PropTypes.string,
};

export default connect(mapStateToProps)(AppBar);
