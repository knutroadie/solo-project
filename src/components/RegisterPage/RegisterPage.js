import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
  };

  registerUser = (event) => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      });
    } else {
      this.props.dispatch({ type: 'REGISTRATION_INPUT_ERROR' });
    }
    this.props.history.push('/')
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <Card>
        <CardContent>
          <div>
            {this.props.errors.registrationMessage && (
              <h2
                className="alert"
                role="alert"
              >
                {this.props.errors.registrationMessage}
              </h2>
            )}
            <form>
              <h3>Register User</h3>
              <TextField type="text" label="username" value={this.state.username} onChange={this.handleInputChangeFor('username')} /><br></br>
              {/* <div>
                <label htmlFor="username">
                  Username:
              <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleInputChangeFor('username')}
                  />
                </label>
              </div> */}
              {/* <div>
                <label htmlFor="password">
                  Password:
              <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChangeFor('password')}
                  />
                </label>
              </div> */}
              <TextField type="text" label="password" value={this.state.password} onChange={this.handleInputChangeFor('password')} /><br></br>
              {/* <div>
                <input
                  className="register"
                  type="submit"
                  name="submit"
                  value="Register"
                />
              </div> */}
              <Button variant="contained" onClick={this.registerUser}>register</Button>
            </form>
            {/* <button
              type="button"
              className="link-button"
              onClick={() => { this.props.dispatch({ type: 'SET_TO_LOGIN_MODE' }) }}
            >
              Login
          </button> */}
          </div>
        </CardContent>
      </Card>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default withRouter(connect(mapStateToProps)(RegisterPage));

