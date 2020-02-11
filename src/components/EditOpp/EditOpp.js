import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class EditOpp extends Component {

    goDetail = () => {
        console.log('clicking to go detail');
        this.props.history.push(`/detail`)
    }

    render() {
        return (
            <div>
                <p>this is the EDIT form</p>
                <input placeholder="name"></input>
                <input placeholder="description"></input>
                <input placeholder="contact"></input>
                <input placeholder="email"></input>
                <input placeholder="phone"></input>
                <input placeholder="web_address"></input>
                <input placeholder="social"></input>
                <input placeholder="street_address"></input>
                <input placeholder="city"></input>
                <input placeholder="zip"></input>
                <input placeholder="image_url"></input>
                <button onClick={this.goDetail}>submit changes</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putReduxStateOnProps)(EditOpp));