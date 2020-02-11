import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, HashRouter as Router, Route, Link } from 'react-router-dom';

class NavBar extends Component {

    goHome = () => {
        console.log('clicking to go home');
        this.props.history.push(`/`)
    }
    goLogin = () => {
        console.log('clicking to go login');
        this.props.history.push(`/login`)
    }
    goLogout = () => {
        console.log('clicking to go logout');
        this.props.history.push(`/logout`)
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
        return (
            <div>
                <h1>good do good</h1>
                <button onClick={this.goHome}>home</button>
                <button onClick={this.goLogin}>login</button>
                <button onClick={this.goLogout}>logout</button>
                <button onClick={this.goSubmit}>submit</button>
                <button onClick={this.goAbout}>about</button>
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