import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewOpp from '../NewOpp/NewOpp';

class NewlyAdded extends Component {
    render() {
        return (
            <div id="newlyAddedList">
                <b>recently added</b>
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
    return (
        {
            reduxState
        }
    )
}

export default connect(putStateOnProps)(NewlyAdded)