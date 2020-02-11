import React, { Component} from 'react';

class EditOpp extends Component {
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
                <button>submit changes</button>
            </div>
        )
    }
}

export default EditOpp;