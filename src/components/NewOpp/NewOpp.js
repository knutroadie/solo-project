import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewOpp extends Component {

    // redirects the user to the detail view of the item they click on
    goDetail = (event, opp) => {
        console.log('clicking to go detail', this.props.opp);
        this.props.history.push(`/detail/${opp.id}`)
    }

    // creates a reusable list item component for newly added
    render() {
        return (
            <div key={this.props.opp.id} onClick={(event) => this.goDetail(event, this.props.opp)}>
                <li id="newItemList">
                    <p>{this.props.opp.name}</p>
                    <img src={this.props.opp.image_url} alt={this.props.opp.name} height="50"></img>
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

export default withRouter(connect(putReduxStateOnProps)(NewOpp));