import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class OppDetail extends Component {

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
        return (
            <div>
                <p>this is an ITEM</p>
                <div>image</div>
                <button onClick={this.upVote}>upvote</button>
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