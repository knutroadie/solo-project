import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class OppItem extends Component {

    // directs the user to a detailed view of the item they just clicked on
    goDetail = (event, opp) => {
        this.props.history.push(`/detail/${opp.id}`)
    }

    // POST an user-gerated LIKE to the database
    upVote = () => {
        this.props.dispatch({
            type: 'CLICK_LIKE',
            payload: this.props.opp.id
        })
        console.log('clicking to upvote', this.props.opp.id);
    }

    render() {
        // if the user is logged in
        if (this.props.reduxState.user.username) {
            return (
                <Card>
                    <CardContent>
                        <div>
                            <li>
                                <h3>{this.props.opp.name}</h3>
                                <img src={this.props.opp.image_url} alt={this.props.opp.name} height="65"></img>
                                <p>{this.props.opp.description}</p>
                                <Button variant="contained" onClick={this.upVote}>upvote</Button>
                                <Button variant="contained" key={this.props.opp.id} onClick={(event) => this.goDetail(event, this.props.opp)}>see more</Button>
                            </li>
                        </div>
                    </CardContent>
                </Card>
            )
        // if the user is not logged in
        } else {
            return (
                <Card>
                    <CardContent>
                        <div>
                            <li>
                                <h3>{this.props.opp.name}</h3>
                                <img src={this.props.opp.image_url} alt={this.props.opp.name} height="65"></img>
                                <p>{this.props.opp.description}</p>
                                <Button variant="contained" key={this.props.opp.id} onClick={(event) => this.goDetail(event, this.props.opp)}>see more</Button>
                            </li>
                        </div>
                    </CardContent>
                </Card>
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