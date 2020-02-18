import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";

class OppDetail extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_DETAIL',
            payload: this.props.match.params.id
        })
    }

    goEdit = () => {
        console.log('clicking to go edit', this.props.match.params.id);
        this.props.history.push(`/edit/${this.props.match.params.id}`)
    }

    deleteOpp = () => {
        console.log('clicking to delete');
        this.props.dispatch({
            type: 'DELETE_OPP',
            payload: this.props.match.params.id
        })
        this.props.history.push(`/`)
    }

    upVote = () => {
        // post to user_opportunity
        this.props.dispatch({
            type: 'CLICK_LIKE',
            payload: this.props.match.params.id
        })
    }

    render() {

        console.log(this.props.match.params.id);
        console.log(this.props.reduxState.detailReducer);
        if (this.props.reduxState.user.auth < 1) {
            return (
                <div>
                    <br></br>
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
                    <Button onClick={this.upVote}>upvote</Button>
                    <Button onClick={this.goEdit}>edit</Button>
                    <Button onClick={(event) => { if (window.confirm('are you sure you want to delete this?')) this.deleteOpp(event) }}>delete</Button>
                </div>
            )
        } else if (this.props.reduxState.user.auth > 0) {
            return (
                <div>
                    <br></br>
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
                    <Button onClick={this.upVote}>upvote</Button>
                </div>
            )
        } else {
            return (
                <div>
                    <br></br>
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