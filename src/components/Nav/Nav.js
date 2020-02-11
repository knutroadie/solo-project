import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <h1>good do good</h1>
    <h3>meeting good people WAS hard.</h3>
    {/* <h2 className="nav-title">Prime Solo Project</h2> */}
    <button className="nav-link" to="/home">
      Home
    </button>

    <button className="nav-link" to="/home">
      {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
      {props.user.id ? 'Home' : 'Login / Register'}
    </button>
    {/* Show the link to the info page and the logout button if the user is logged in */}
    {props.user.id && (
      <>
        <button className="nav-link" to="/info">
          Info Page
          </button>
        <LogOutButton className="nav-link" />
      </>
    )}
    {/* Always show this link since the about page is not protected */}
    <button className="nav-link" to="/about">
      About
      </button>
    <button className="nav-link" to="/submit">
      Submit
      </button>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
