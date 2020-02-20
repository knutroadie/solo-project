import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class LoginPage extends Component {
  state = {
    username: '',
    password: '',
  };

  // login fucntionality
  login = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'LOGIN',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
      const location = this.props.match.path;
      console.log('location:', this.props.match.path);
      if (location == '/login') {
        this.props.history.push('/');
      } else {
        this.props.history.push(location);
      }
    } else {
      this.props.dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }

  // sets local state upon user input
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  // redirects the user to a register form
  navClick = () => {
    this.props.dispatch({
      type: 'SET_TO_REGISTER_MODE'
    })
    this.props.history.push('/register')
  }

  // show inputs and buttons for login and register
  render() {
    return (
      <div id="loginCard">
        <Card>
          <CardContent>
            <div>
            {this.props.errors.loginMessage && (
              <h2 className="alert" role="alert">
                {this.props.errors.loginMessage}
              </h2>
            )}
            <form id="formContent">
              <h3>Login</h3>
              <TextField type="text" label="username" value={this.state.username} onChange={this.handleInputChangeFor('username')} /><br></br>
              <TextField type="password" label="password" value={this.state.password} onChange={this.handleInputChangeFor('password')} /><br></br>
              <Button id="Button" variant="contained" onClick={this.login}>Log In</Button>
              <Button id="Button" variant="contained" onClick={this.navClick}>Register</Button>
            </form>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default withRouter(connect(mapStateToProps)(LoginPage));