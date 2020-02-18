import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

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
                <TextField type="text" label="name" value={this.state.newOpp.name} onChange={(event) => this.makeNewOpp(event, 'name')} /><br></br>
                <TextField type="text" label="description" value={this.state.newOpp.description} onChange={(event) => this.makeNewOpp(event, 'description')} /><br></br>
                <TextField type="text" label="contact name" value={this.state.newOpp.contact} onChange={(event) => this.makeNewOpp(event, 'contact')} /><br></br>
                <TextField type="email" label="contact email" value={this.state.newOpp.email} onChange={(event) => this.makeNewOpp(event, 'email')} /><br></br>
                <TextField type="tel" label="contact phone" value={this.state.newOpp.phone} onChange={(event) => this.makeNewOpp(event, 'phone')} /><br></br>
                <TextField type="url" label="web address" value={this.state.newOpp.web_address} onChange={(event) => this.makeNewOpp(event, 'web_address')} /><br></br>
                <TextField type="url" label="social" value={this.state.newOpp.social} onChange={(event) => this.makeNewOpp(event, 'social')} /><br></br>
                <TextField type="text" label="street address" value={this.state.newOpp.street_address} onChange={(event) => this.makeNewOpp(event, 'street_address')} /><br></br>
                <TextField type="text" label="city" value={this.state.newOpp.city} onChange={(event) => this.makeNewOpp(event, 'city')} /><br></br>
                <TextField type="text" label="zip code" value={this.state.newOpp.zip} onChange={(event) => this.makeNewOpp(event, 'zip')} /><br></br>
                <Button onClick={this.submitNewOpp}>submit</Button>
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