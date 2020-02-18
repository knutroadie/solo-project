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
                    <Button variant="contained" onClick={(event) => this.navClick(event, '')}>home</Button>
                    <LogOutButton />
                    <Button variant="contained" onClick={(event) => this.navClick(event, 'submit')}>submit</Button>
                    <Button variant="contained" onClick={(event) => this.navClick(event, 'about')}>about</Button>
                    <p>{this.props.reduxState.user.username} is logged in.</p>
                </div>
            )
        } else {
            return (
                <div>
                    <Button variant="contained" onClick={(event) => this.navClick(event, '')}>home</Button>
                    <Button variant="contained" onClick={(event) => this.navClick(event, 'login')}>login</Button>
                    <Button variant="contained" onClick={(event) => this.navClick(event, 'about')}>about</Button>
                    <p>log in to recommend or submit your favorite volunteer opportunity.</p>
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