import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OppDetail from '../OppDetail/OppDetail';

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
        return (
            <div>
                <li>
                    <h3>{this.props.opp.name}</h3>
                    <img src={this.props.opp.image_url} alt={this.props.opp.name} height="65"></img>
                    <p>{this.props.opp.description}</p>
                    {/* <p>{this.props.opp.contact}</p>
                    <p>{this.props.opp.email}</p>
                    <p>{this.props.opp.phone}</p>
                    <a href={this.props.opp.web_address}>website</a>
                    <br></br>
                    <a href={this.props.opp.social}>social</a>
                    <p>{this.props.opp.street_address}</p>
                    <p>{this.props.opp.city}, {this.props.opp.zip}</p> */}
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