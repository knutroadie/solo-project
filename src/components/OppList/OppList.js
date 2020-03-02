import React, { Component } from 'react';
import { connect } from 'react-redux'
import OppItem from '../OppItem/OppItem';

// this renders list items for everything in its reducer
class OppList extends Component {

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_OPPS'
        })
    }
    render() {
        return (
            <div>
                <ul>
                     {this.props.reduxState.oppsReducer.map(opp => {
                                return <OppItem id="oppListItem" key={opp.id} opp={opp} />
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

export default connect(putStateOnProps)(OppList)