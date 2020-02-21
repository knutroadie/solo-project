import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

class EditOpp extends Component {

    state = {
        oppToEdit: {
            id: this.props.reduxState.detailReducer.id,
            img_url: this.props.reduxState.detailReducer.image_url,
            name: this.props.reduxState.detailReducer.name,
            description: this.props.reduxState.detailReducer.description,
            contact: this.props.reduxState.detailReducer.contact,
            email: this.props.reduxState.detailReducer.email,
            phone: this.props.reduxState.detailReducer.phone,
            web_address: this.props.reduxState.detailReducer.web_address,
            social: this.props.reduxState.detailReducer.social,
            street_address: this.props.reduxState.detailReducer.street_address,
            city: this.props.reduxState.detailReducer.city,
            zip: this.props.reduxState.detailReducer.zip
        }
    }

    editThisOpp = (event, propertyValue) => {
        // build a new object in state
        console.log('building a new opp', this.state.oppToEdit);
        this.setState({
            oppToEdit: {
                ...this.state.oppToEdit,
                [propertyValue]: event.target.value,
            }
        })
    }

    submitEdit = () => {
        // dispatches edit to redux/database
        console.log('clicking to submit edit', this.state.oppToEdit);
        this.props.dispatch({
            type: 'SUBMIT_EDIT',
            payload: this.state.oppToEdit,
            url: `/api/opportunity/${this.state.oppToEdit.id}`
        })
        this.goDetail();
    }

    goDetail = () => {
        // brings the user to a detail page showing all of
        // the information for the item they clicked on
        // console.log('clicking to go back to detail');
        this.props.history.push(`/detail/${this.props.reduxState.detailReducer.id}`)
    }

    // renders pre-populated inputs with the
    // information of the item we just clicked on

    // THE FOLLOWING CODE IS REDUNDANT
    // AND NEEDS TO BE MADE DRY

    render() {
        let opp = this.state.oppToEdit;
        return (
            <div id="submitEdit">
                <br></br>
                <Card>
                    <CardContent>
                        <TextField type="text" label="image url" defaultValue={opp.img_url} value={opp.img_url} onChange={(event) => this.editThisOpp(event, 'img_url')} /><br></br>
                        <TextField type="text" label="name" defaultValue={opp.name} value={opp.name} onChange={(event) => this.editThisOpp(event, 'name')} /><br></br>
                        <TextField type="text" label="description" multiline rowsMax="8" defaultValue={opp.description} value={opp.description} onChange={(event) => this.editThisOpp(event, 'description')} /><br></br>
                        <TextField type="text" label="contact name" defaultValue={opp.contact} value={opp.contact} onChange={(event) => this.editThisOpp(event, 'contact')} /><br></br>
                        <TextField type="email" label="contact email" helperText="name@email.com" defaultValue={opp.email} value={opp.email} onChange={(event) => this.editThisOpp(event, 'email')} /><br></br>
                        <TextField type="tel" label="contact phone" helperText="(612) 555-1234" defaultValue={opp.phone} value={opp.phone} onChange={(event) => this.editThisOpp(event, 'phone')} /><br></br>
                        <TextField type="url" label="web address" defaultValue={opp.web_address} value={opp.web_address} onChange={(event) => this.editThisOpp(event, 'web_address')} /><br></br>
                        <TextField type="url" label="social" defaultValue={opp.social} value={opp.social} onChange={(event) => this.editThisOpp(event, 'social')} /><br></br>
                        <TextField type="text" label="street address" defaultValue={opp.street_address} value={opp.street_address} onChange={(event) => this.editThisOpp(event, 'street_address')} /><br></br>
                        <TextField type="text" label="city" defaultValue={opp.city} value={opp.city} onChange={(event) => this.editThisOpp(event, 'city')} /><br></br>
                        <TextField type="text" label="zip code" defaultValue={opp.zip} value={opp.zip} onChange={(event) => this.editThisOpp(event, 'zip')} /><br></br>
                        <Button id="Button" variant="contained" onClick={this.submitEdit}>submit changes</Button>
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

export default withRouter(connect(putReduxStateOnProps)(EditOpp));