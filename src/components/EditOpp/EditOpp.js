import React, { Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EditOpp extends Component {

    // componentDidMount() {
    //     this.props.dispatch({
    //         type: 'GET_DETAIL',
    //         payload: this.props.match.params.id
    //     })
    // }

    state = {
        editedOpp: {
            img_url: '',
            name: '',
            description: '',
            contact: '',
            email: '',
            phone: '',
            web_address: '',
            social: '',
            street_address: '',
            city: '',
            zip: '',
        }
    }

    goDetail = () => {
        console.log('clicking to go detail');
        this.props.history.push(`/detail`)
    }

    render() {
        return (
            <div>
                <p>this is the EDIT form</p>
                <input placeholder="enter an image_url"></input>
                <input placeholder="name"></input>
                <input placeholder="description"></input>
                <input placeholder="contact"></input>
                <input placeholder="email"></input>
                <input placeholder="phone"></input>
                <input placeholder="web address"></input>
                <input placeholder="social"></input>
                <input placeholder="street address"></input>
                <input placeholder="city"></input>
                <input placeholder="zip code"></input>
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