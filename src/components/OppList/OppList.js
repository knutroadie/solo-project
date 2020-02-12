import React, { Component } from 'react';
import { connect } from 'react-redux'
import OppItem from '../OppItem/OppItem';

class OppList extends Component {
    render() {
        return (
            <div>
                <p>this is a LIST</p>
                <ul>
                    
                        {this.props.reduxState.oppsReducer.map(opp => {
                            return <OppItem id={opp.id} key={opp.id} />
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