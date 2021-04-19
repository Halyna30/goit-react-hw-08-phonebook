import defaultAvatar from './default-avatar.png';
import { connect } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import authOperation from '../../Redux/auth/auth-operation';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import s from './UserMenu.module.scss';

const UserMenu = ({ avatar, email, onLogout }) => (
  <div className={s.container}>
    <img src={avatar} alt="" width="32" className={s.avatar} />
    <span className={s.name}>Welcome, {email}</span>
    <Button
      type="button"
      onClick={onLogout}
      variant="contained"
      color="primary"
    >
      Logout
    </Button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserEmail(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperation.logOut,
};

UserMenu.propTypes = {
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
