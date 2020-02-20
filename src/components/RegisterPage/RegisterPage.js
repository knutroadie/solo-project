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

  // register functionality
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
  }

  // sets local state to user input
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  // inputs and button to login a registered user
  render() {
    return (
      <div id="loginCard">
      <Card>
        <CardContent>
          <div>
            {this.props.errors.registrationMessage && (
              <h2 className="alert" role="alert">
                {this.props.errors.registrationMessage}
              </h2>
            )}
            <form id="formContent">
              <h3>Register User</h3>
              <TextField type="text" label="username" value={this.state.username} onChange={this.handleInputChangeFor('username')} /><br></br>
              <TextField type="password" label="password" value={this.state.password} onChange={this.handleInputChangeFor('password')} /><br></br>
              <Button id="Button" variant="contained" onClick={this.registerUser}>register</Button>
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

export default withRouter(connect(mapStateToProps)(RegisterPage));