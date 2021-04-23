import { Component } from 'react';
import { connect } from 'react-redux';
import authOperation from '../../Redux/auth/auth-operation';
import Container from '../../components/Container';
import PropTypes from 'prop-types';
import s from './LoginPage.module.scss';
import Button from '@material-ui/core/Button';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <Container>
          <h1>Login page</h1>

          <form
            onSubmit={this.handleSubmit}
            className={s.form}
            autoComplete="off"
          >
            <label className={s.label}>
              email
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
                autocomplete="off"
              />
            </label>

            <label className={s.label}>
              password
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
                autocomplete="off"
              />
            </label>

            <Button type="submit" variant="contained" color="primary">
              Войти
            </Button>
          </form>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperation.logIn,
};

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginPage);
