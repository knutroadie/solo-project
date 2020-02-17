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
        this.props.dispatch({
            type: 'SUBMIT_OPP',
            payload: this.state.newOpp
        })
        this.goHome();
    }

    goHome = () => {
        alert('thanks for helping us!')
        console.log('clicking the alert to submit and go home');
        this.props.history.push(`/`)
    }

    render() {
        return (
            <div>
                <br></br>
                <form>
                name: <input type="text" placeholder="name" value={this.state.newOpp.name} onChange={(event) => this.makeNewOpp(event, 'name')}></input>
                description: <input type="text" placeholder="description" value={this.state.newOpp.description} onChange={(event) => this.makeNewOpp(event, 'description')}></input>
                contact name: <input type="text" placeholder="contact name" value={this.state.newOpp.contact} onChange={(event) => this.makeNewOpp(event, 'contact')}></input>
                contact email: <input type="email" placeholder="contact email" value={this.state.newOpp.email} onChange={(event) => this.makeNewOpp(event, 'email')}></input>
                contact phone number: <input type="tel" placeholder="contact phone" value={this.state.newOpp.phone} onChange={(event) => this.makeNewOpp(event, 'phone')}></input>
                internet address: <input type="url" placeholder="web address" value={this.state.newOpp.web_address} onChange={(event) => this.makeNewOpp(event, 'web_address')}></input>
                social media address: <input type="url" placeholder="social" value={this.state.newOpp.social} onChange={(event) => this.makeNewOpp(event, 'social')}></input>
                street address: <input type="text" placeholder="street address" value={this.state.newOpp.street_address} onChange={(event) => this.makeNewOpp(event, 'street_address')}></input>
                city: <input type="text" placeholder="city" value={this.state.newOpp.city} onChange={(event) => this.makeNewOpp(event, 'city')}></input>
                zip code: <input type="text" placeholder="zip code" value={this.state.newOpp.zip} onChange={(event) => this.makeNewOpp(event, 'zip')}></input>
                <button onClick={this.submitNewOpp}>submit</button>
                </form>
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