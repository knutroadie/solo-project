import React, { Component } from 'react';
import { connect } from 'react-redux'
import OppItem from '../OppItem/OppItem';

class OppList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.reduxState.oppsReducer.map(opp => {
                        return <OppItem key={opp.id} opp={opp} />
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

export default connect(putStateOnProps)(OppList)