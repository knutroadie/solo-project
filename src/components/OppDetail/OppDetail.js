import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class OppDetail extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_DETAIL',
            payload: this.props.match.params.id
        })
    }

    goEdit = () => {
        console.log('clicking to go edit', this.props.match.params.id );
        this.props.history.push(`/edit/${this.props.match.params.id}`)
    }
    
    deleteOpp = () => {
        console.log('clicking to delete', );
        this.props.dispatch({
            type: 'DELETE_OPP',
            payload: this.props.match.params.id
        })
        this.props.history.push(`/`)
    }

    upVote = () => {
        console.log('clicking to upvote');
    }

    render() {
        console.log(this.props.match.params.id);
        console.log(this.props.reduxState.detailReducer);
        
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
                <button onClick={this.upVote}>upvote</button>
                <button onClick={this.goEdit}>edit</button>
                <button onClick={(event) => { if (window.confirm('are you sure you want to delete this?')) this.deleteOpp(event) }}>delete</button>
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