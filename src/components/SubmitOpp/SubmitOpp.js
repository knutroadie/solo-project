import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class SubmitOpp extends Component {

    state = {
        newOpp: {
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

    componentDidMount() {
        this.props.dispatch({
            type: 'GET_DETAIL',
            payload: this.props.match.params.id
        })
    }

    makeNewOpp = (event, propertyValue) => {
        console.log(this.state.newOpp);
        this.setState({
            newOpp: {
                ...this.state.newOpp,
                [propertyValue]: event.target.value,
            }
        })
    }

    submitNewOpp = () => {
        console.log('submitting new:', this.state.newOpp);
        this.goHome();
    }

    goHome = () => {
        alert('thanks for helping us!')
        console.log('clicking to go home');
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
                <p>this is the SUBMIT form</p>
                <input placeholder="name" value={this.state.newOpp.name} onChange={(event) => this.makeNewOpp(event, 'name')}></input>
                <input placeholder="description" value={this.state.newOpp.description} onChange={(event) => this.makeNewOpp(event, 'description')}></input>
                <input placeholder="contact name" value={this.state.newOpp.contact} onChange={(event) => this.makeNewOpp(event, 'contact')}></input>
                <input placeholder="contact email" value={this.state.newOpp.email} onChange={(event) => this.makeNewOpp(event, 'email')}></input>
                <input placeholder="contact phone" value={this.state.newOpp.phone} onChange={(event) => this.makeNewOpp(event, 'phone')}></input>
                <input placeholder="web address" value={this.state.newOpp.web_address} onChange={(event) => this.makeNewOpp(event, 'web_address')}></input>
                <input placeholder="social" value={this.state.newOpp.social} onChange={(event) => this.makeNewOpp(event, 'social')}></input>
                <input placeholder="street address" value={this.state.newOpp.street_address} onChange={(event) => this.makeNewOpp(event, 'street_address')}></input>
                <input placeholder="city" value={this.state.newOpp.city} onChange={(event) => this.makeNewOpp(event, 'city')}></input>
                <input placeholder="zip code" value={this.state.newOpp.zip} onChange={(event) => this.makeNewOpp(event, 'zip')}></input>
                <button onClick={this.submitNewOpp}>submit</button>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putReduxStateOnProps)(SubmitOpp));