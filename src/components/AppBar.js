import { connect } from 'react-redux';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import authSelectors from '../Redux/auth/auth-selectors';

const AppBar = ({ isAuthenticated }) => (
  <div className="header">
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
