import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';

class NavBar extends Component {

    goHome = () => {
        console.log('clicking to go home');
        this.props.history.push(`/`)
    }
    goLogin = () => {
        console.log('clicking to go login');
        this.props.history.push(`/login`)
    }
    goSubmit = () => {
        console.log('clicking to go submit');
        this.props.history.push(`/submit`)
    }
    goAbout = () => {
        console.log('clicking to go about');
        this.props.history.push(`/about`)
    }

    render() {
        console.log(this.props.reduxState.user.name);
        return (
            <div>
                <h1>good do good</h1>
                <button onClick={this.goHome}>home</button>
                <button onClick={this.goLogin}>login</button>
                <LogOutButton />
                <button onClick={this.goSubmit}>submit</button>
                <button onClick={this.goAbout}>about</button>
                <p>{this.props.reduxState.user.name} is logged in.</p>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putReduxStateOnProps)(NavBar));