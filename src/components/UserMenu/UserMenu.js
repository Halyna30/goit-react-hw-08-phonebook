import defaultAvatar from './default-avatar.png';
import { connect } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import authOperations from '../../Redux/auth/auth-operation';
import authOperation from '../../Redux/auth/auth-operation';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({ avatar, name, onLogout }) => (
  <div style={styles.container}>
    <img src={avatar} alt="" width="32" style={styles.avatar} />
    <span style={styles.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperation.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
