import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import LogOutButton from '../LogOutButton/LogOutButton';

class NavBar extends Component {

    // this directs the user to the link corresponding to the button they clicked on
    navClick = (event, propertyValue) => {
        this.props.history.push(`/${propertyValue}`);
    }

    // THE FOLLOWING CODE IS REDUNDANT
    // AND NEEDS TO BE MADE DRY

    render() {
        // if the user is logged in, show them this
        if (this.props.reduxState.user.username) {
            return (
                <div id="headerDiv">
                    <header>
                    <h1 id="header">good do good</h1>
                    <h3 id="motto">meeting good people WAS hard</h3>
                    </header>
                    <div className="navBar">
                        <Button onClick={(event) => this.navClick(event, '')}>home</Button>
                        <LogOutButton />
                        <Button onClick={(event) => this.navClick(event, 'submit')}>submit</Button>
                        <Button onClick={(event) => this.navClick(event, 'about')}>about</Button>
                    </div>
                    <p id="loggedIn">{this.props.reduxState.user.username} is logged in.</p>
                </div>
            )
        } else {
            // if the user is not logged in, show them this
            return (
                <div>
                    <header>
                    <h1 id="header">good do good</h1>
                    <h3 id="motto">meeting good people WAS hard</h3>
                    </header>
                    <div className="navBar">
                        <Button onClick={(event) => this.navClick(event, '')}>home</Button>
                        <Button onClick={(event) => this.navClick(event, 'login')}>login</Button>
                        <Button onClick={(event) => this.navClick(event, 'about')}>about</Button>
                    </div>
                    <p id="loggedIn">log in to recommend or submit your favorite volunteer opportunity.</p>
                </div>
            )
        }
    }
}

const putStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putStateOnProps)(NavBar));