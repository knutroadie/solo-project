import React, { Component} from 'react';
import OppItem from '../OppItem/OppItem'

class OppList extends Component {
    render() {
        return (
            <div>
                <p>this is a LIST</p>
                <ul>
                <li><OppItem /></li>
                <li><OppItem /></li>
                <li><OppItem /></li>
                </ul>
            </div>
        )
    }
}

export default OppList;