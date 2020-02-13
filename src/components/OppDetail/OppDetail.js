import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class OppDetail extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_DETAIL',
            payload : this.props.match.params.id
        })
    }

    goEdit = () => {
        console.log('clicking to go edit');
        this.props.history.push(`/edit`)
    }
    deleteOpp = () => {
        console.log('clicking to delete');
        this.props.history.push(`/`)
    }

    upVote = () => {
        console.log('clicking to upvote'); 
    }

    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                    {/* <p>{this.props.reduxState.oppReducer[opp.id].name}</p>
                    <p>{this.props.opp.email}</p>
                    <p>{this.props.opp.phone}</p>
                    <a href={this.props.opp.web_address}>website</a>
                    <br></br>
                    <a href={this.props.opp.social}>social</a>
                    <p>{this.props.opp.street_address}</p>
                    <p>{this.props.opp.city}, {this.props.opp.zip}</p>
                <button onClick={this.upVote}>upvote</button> */}
                <button onClick={this.goEdit}>edit</button>
                <button onClick={(event) => {if (window.confirm('are you sure you want to delete this?')) this.deleteOpp(event)}}>delete</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putReduxStateOnProps)(OppDetail));