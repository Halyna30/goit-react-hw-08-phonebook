import { Component } from 'react';
import { connect } from 'react-redux';
import authOperation from '../../Redux/auth/auth-operation';
import Container from '../../components/Container';
import PropTypes from 'prop-types';
import s from './RegisterPage.module.scss';
import Button from '@material-ui/core/Button';

class RegisterPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <Container>
        <h1>Registration page</h1>

        <form
          onSubmit={this.handleSubmit}
          className={s.form}
          autoComplete="off"
        >
          <label className={s.label}>
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              autocomplete="off"
            />
          </label>

          <label className={s.label}>
            Email
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
            Register
          </Button>
        </form>
      </Container>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperation.register,
};

RegisterPage.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(RegisterPage);
