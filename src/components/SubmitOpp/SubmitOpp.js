import React, { Component} from 'react';

class SubmitOpp extends Component {

    goHome = () => {
        alert('thanks for helping us!')
        console.log('clicking to go home');
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
                <p>this is the SUBMIT form</p>
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
                <button onClick={this.goHome}>submit</button>
            </div>
        )
    }
}

export default SubmitOpp;