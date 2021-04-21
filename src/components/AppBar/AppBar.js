import { connect } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import PropTypes from 'prop-types';
import Container from '../Container';
import authSelectors from '../../Redux/auth/auth-selectors';
import s from './AppBar.module.scss';

const AppBar = ({ isAuthenticated }) => (
  <header>
    <Container classes={s.header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </Container>
  </header>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

AppBar.propTypes = {
  isAuthenticated: PropTypes.string,
};

export default connect(mapStateToProps)(AppBar);
