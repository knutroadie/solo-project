import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

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

    // sets local state based on user input
    makeNewOpp = (event, propertyValue) => {
        console.log(this.state.newOpp);
        this.setState({
            newOpp: {
                ...this.state.newOpp,
                [propertyValue]: event.target.value,
            }
        })
    }

    // POST dispatch to the database
    submitNewOpp = () => {
        console.log('submitting new:', this.state.newOpp);
        this.props.dispatch({
            type: 'SUBMIT_OPP',
            payload: this.state.newOpp
        })
        this.goHome();
    }

    // generates a pop-up thanking the user for a successful submission
    goHome = () => {
        alert('thanks for helping us!')
        this.props.history.push(`/`)
    }

    // THE FOLLOWING CODE IS REDUNDANT
    // AND NEEDS TO BE MADE DRY

    // displays a form for the user to generate a database submission
    render() {
        let opp = this.state.newOpp;
        return (
            <div id="submitEdit">
                <br></br>
                <Card>
                    <CardContent>
                        <form>
                            <TextField type="text" label="name" helperText="required" value={opp.name} onChange={(event) => this.makeNewOpp(event, 'name')} /><br></br>
                            <TextField type="text" label="contact name" value={opp.contact} onChange={(event) => this.makeNewOpp(event, 'contact')} /><br></br>
                            <TextField type="email" label="contact email" helperText="example: name@email.com" value={opp.email} onChange={(event) => this.makeNewOpp(event, 'email')} /><br></br>
                            <TextField type="tel" label="contact phone" helperText="example: (612) 555-1234" value={opp.phone} onChange={(event) => this.makeNewOpp(event, 'phone')} /><br></br>
                            <TextField type="url" label="web address" value={opp.web_address} onChange={(event) => this.makeNewOpp(event, 'web_address')} /><br></br>
                            <TextField type="url" label="social" value={opp.social} onChange={(event) => this.makeNewOpp(event, 'social')} /><br></br>
                            <TextField type="text" label="street address" value={opp.street_address} onChange={(event) => this.makeNewOpp(event, 'street_address')} /><br></br>
                            <TextField type="text" label="city" value={opp.city} onChange={(event) => this.makeNewOpp(event, 'city')} /><br></br>
                            <TextField type="text" label="zip code" value={opp.zip} onChange={(event) => this.makeNewOpp(event, 'zip')} /><br></br>
                            <TextField type="text" label="description" multiline rowsMax="10" value={opp.description} onChange={(event) => this.makeNewOpp(event, 'description')} /><br></br>
                            <Button id="Button" variant="contained" onClick={this.submitNewOpp}>submit</Button>
                        </form>
                    </CardContent>
                </Card>
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