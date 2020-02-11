import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class OppDetail extends Component {

    goEdit = () => {
        console.log('clicking to go edit');
        this.props.history.push(`/edit`)
    }
    deleteOpp = () => {
        alert('are you sure you want to delete that?')
        console.log('clicking to delete');
        this.props.history.push(`/`)
    }


    render() {
        return (
            <div>
                <p>this is an ITEM</p>
                <button onClick={this.goEdit}>edit</button>
                <button onClick={this.deleteOpp}>delete</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putReduxStateOnProps)(OppDetail));