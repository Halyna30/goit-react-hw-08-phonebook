import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';

const AppBar = ({ isAuthenticated }) => (
  <div className="header">
    <Navigation />
    {isAuthenticated ? <UserMenu /> : <AuthNav />}
  </div>
);

export default AppBar;
