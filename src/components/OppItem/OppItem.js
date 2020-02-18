import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";

class OppItem extends Component {

    goDetail = (event, opp) => {
        console.log('clicking to go detail', this.props.opp);
        this.props.history.push(`/detail/${opp.id}`)
    }

    upVote = () => {
        // post to user_opportunity
        this.props.dispatch({
            type: 'CLICK_LIKE',
            payload: this.props.opp.id
        })
        console.log('clicking to upvote', this.props.opp.id);
    }

    render() {
        if (this.props.reduxState.user.username) {
            return (
                <div>
                    <li>
                        <h3>{this.props.opp.name}</h3>
                        <img src={this.props.opp.image_url} alt={this.props.opp.name} height="65"></img>
                        <p>{this.props.opp.description}</p>
                        <Button onClick={this.upVote}>upvote</Button>
                        <Button key={this.props.opp.id} onClick={(event) => this.goDetail(event, this.props.opp)}>see more</Button>
                    </li>
                </div>
            )
        } else {
            return (
                <div>
                    <li>
                        <h3>{this.props.opp.name}</h3>
                        <img src={this.props.opp.image_url} alt={this.props.opp.name} height="65"></img>
                        <p>{this.props.opp.description}</p>
                        <Button key={this.props.opp.id} onClick={(event) => this.goDetail(event, this.props.opp)}>see more</Button>
                    </li>
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

export default withRouter(connect(putReduxStateOnProps)(OppItem));