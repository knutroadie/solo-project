import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewOpp from '../NewOpp/NewOpp';

// this renders list items for everything in its reducer
class NewlyAdded extends Component {
    render() {
        return (
            <div id="newlyAddedList">
                <div id="newHeader">
                <b>recently added</b>
                </div>
                <br></br>
                <ul>
                    {this.props.reduxState.newOppReducer.map(opp => {
                        return <NewOpp key={opp.id} opp={opp} />
                    })}
                </ul>
            </div>
        )
    }
}

const putStateOnProps = (reduxState) => {
    return ({
            reduxState
    })
}

export default connect(putStateOnProps)(NewlyAdded)