import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class OppItem extends Component {

    goDetail = () => {
        console.log('clicking to go detail');
        this.props.history.push(`/detail`)
    }

    upVote = () => {
        console.log('clicking to upvote'); 
    }

    render() {
        return (
            <div>
                <p>this is an ITEM</p>
                <li>
                <div onClick={this.goDetail}>image</div>
                <button onClick={this.upVote}>upvote</button>
                <button onClick={this.goDetail}>see more</button>
                </li>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putReduxStateOnProps)(OppItem));