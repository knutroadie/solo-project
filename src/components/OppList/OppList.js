import React, { Component} from 'react';
import OppItem from '../OppItem/OppItem'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

class OppList extends Component {
    render() {
        return (
            <div>
                <p>this is a list</p>
                <OppItem />
            </div>
        )
    }
}

export default OppList;