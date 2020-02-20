import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class OppDetail extends Component {

    // GET request for details of the item clicked on
    componentDidMount() {
        this.props.dispatch({
            type: 'GET_DETAIL',
            payload: this.props.match.params.id
        })
    }

    // directs the admin to an edit page pre-populated with the items info
    goEdit = () => {
        console.log('clicking to go edit', this.props.match.params.id);
        this.props.history.push(`/edit/${this.props.match.params.id}`)
    }

    // dispatches a DELETE to the database via redux saga for the item clicked on
    deleteOpp = () => {
        console.log('clicking to delete');
        this.props.dispatch({
            type: 'DELETE_OPP',
            payload: this.props.match.params.id
        })
        this.props.history.push(`/`)
    }

    // POST an user-gerated LIKE to the database
    upVote = () => {
        // post to user_opportunity
        this.props.dispatch({
            type: 'CLICK_LIKE',
            payload: this.props.match.params.id
        })
    }

    // THE FOLLOWING CODE IS REDUNDANT
    // AND NEEDS TO BE MADE DRY

    // show the item detail component differently based on the user
    render() {
        // if an admin is viewing
        if (this.props.reduxState.user.auth < 1) {
            return (
                <div id="fortyCard">
                    <br></br>
                    <Card>
                        <CardContent>
                            <img src={this.props.reduxState.detailReducer.image_url} alt={this.props.reduxState.detailReducer.name} height="85"></img>
                            <h3>{this.props.reduxState.detailReducer.name}</h3>
                            <p>{this.props.reduxState.detailReducer.description}</p>
                            <p>{this.props.reduxState.detailReducer.contact}</p>
                            <p>{this.props.reduxState.detailReducer.email}</p>
                            <p>{this.props.reduxState.detailReducer.phone}</p>
                            <a href={this.props.reduxState.detailReducer.web_address}>website</a>
                            <br></br>
                            <a href={this.props.reduxState.detailReducer.social}>social</a>
                            <p>{this.props.reduxState.detailReducer.street_address}</p>
                            <p>{this.props.reduxState.detailReducer.city}, {this.props.reduxState.detailReducer.zip}</p>
                            <Button id="Button" variant="contained" onClick={this.upVote}>upvote</Button>
                            <Button id="Button" variant="contained" onClick={this.goEdit}>edit</Button>
                            <Button id="Button" variant="contained" onClick={(event) => { if (window.confirm('are you sure you want to delete this?')) this.deleteOpp(event) }}>delete</Button>
                        </CardContent>
                    </Card>
                </div>
            )
        // if a logged in user is viewing
        } else if (this.props.reduxState.user.auth > 0) {
            return (
                <div>
                    <br></br>
                    <Card>
                        <CardContent>
                            <img src={this.props.reduxState.detailReducer.image_url} alt={this.props.reduxState.detailReducer.name} height="85"></img>
                            <h3>{this.props.reduxState.detailReducer.name}</h3>
                            <p>{this.props.reduxState.detailReducer.description}</p>
                            <p>{this.props.reduxState.detailReducer.email}</p>
                            <p>{this.props.reduxState.detailReducer.phone}</p>
                            <a href={this.props.reduxState.detailReducer.web_address}>website</a>
                            <br></br>
                            <a href={this.props.reduxState.detailReducer.social}>social</a>
                            <p>{this.props.reduxState.detailReducer.street_address}</p>
                            <p>{this.props.reduxState.detailReducer.city}, {this.props.reduxState.detailReducer.zip}</p>
                            <Button variant="contained" onClick={this.upVote}>upvote</Button>
                        </CardContent>
                    </Card>
                </div>
            )
        // if a non-logged in user is viewing
        } else {
            return (
                <div>
                    <br></br>
                    <Card>
                        <CardContent>
                            <img src={this.props.reduxState.detailReducer.image_url} alt={this.props.reduxState.detailReducer.name} height="85"></img>
                            <h3>{this.props.reduxState.detailReducer.name}</h3>
                            <p>{this.props.reduxState.detailReducer.description}</p>
                            <p>{this.props.reduxState.detailReducer.email}</p>
                            <p>{this.props.reduxState.detailReducer.phone}</p>
                            <a href={this.props.reduxState.detailReducer.web_address}>website</a>
                            <br></br>
                            <a href={this.props.reduxState.detailReducer.social}>social</a>
                            <p>{this.props.reduxState.detailReducer.street_address}</p>
                            <p>{this.props.reduxState.detailReducer.city}, {this.props.reduxState.detailReducer.zip}</p>
                        </CardContent>
                    </Card>
                </div>
            )
        }
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putReduxStateOnProps)(OppDetail));