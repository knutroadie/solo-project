import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
// import OppDetail from '../OppDetail/OppDetail';

class OppItem extends Component {

    goDetail = (event, opp) => {
        console.log('clicking to go detail', this.props.opp);
        // <OppDetail opp={this.props.opp} />
        this.props.history.push(`/detail/${opp.id}`)
    }

    upVote = () => {
        console.log('clicking to upvote');
    }

    render() {
        console.log(this.props.match.params.id);
        console.log(this.props.reduxState.detailReducer);
        return (
            <div>
                <li>
                    <h3>{this.props.opp.name}</h3>
                    <img src={this.props.opp.image_url} alt={this.props.opp.name} height="65"></img>
                    <p>{this.props.opp.description}</p>
                    <button onClick={this.upVote}>upvote</button>
                    <button key={this.props.opp.id} onClick={(event) => this.goDetail(event, this.props.opp)}>see more</button>
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