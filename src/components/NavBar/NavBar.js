import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import LogOutButton from '../LogOutButton/LogOutButton';

class NavBar extends Component {

    navClick = (event, propertyValue) => {
        console.log('clicking to go to:', propertyValue);
        this.props.history.push(`/${propertyValue}`);
    }

    render() {
        // console.log(this.props.reduxState.user.username);
        if (this.props.reduxState.user.username) {
            return (
                <div>
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
            return (
                <div>
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