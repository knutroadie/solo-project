import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';

class NavBar extends Component {
// const NavBar = (props) => (
    // each click calls the same function, passing in an event and a route

    navClick = (event, propertyValue) => {
        console.log('clicking to go to:', propertyValue );
        this.props.history.push(`${propertyValue}`);
    }

    render() {
        console.log(this.props.reduxState.user.name);
        return (
            <div>
                <h1>good do good</h1>
                <button onClick={(event) => this.navClick(event, '/')}>home</button>
                <button onClick={(event) => this.navClick(event, '/login')}>login</button>
                <LogOutButton />
                <button onClick={(event) => this.navClick(event, '/submit')}>submit</button>
                <button onClick={(event) => this.navClick(event, '/about')}>about</button>
                <p>{this.props.ReduxState.user.name} is logged in.</p>
            </div>
        )
    }
}
// );
// const putStateOnProps = state => ({
//     user: state.user,
//   });

const putStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putStateOnProps)(NavBar));



    // goLogin = () => {
    //     console.log('clicking to go login');
    //     this.props.history.push(`/login`)
    // }
    // goSubmit = () => {
    //     console.log('clicking to go submit');
    //     this.props.history.push(`/submit`)
    // }
    // goAbout = () => {
    //     console.log('clicking to go about');
    //     this.props.history.push(`/about`)
    // }

    // render() {
        // console.log(this.props.reduxState.user.name);
        // return (
