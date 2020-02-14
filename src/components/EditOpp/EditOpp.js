import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EditOpp extends Component {

    state = {
        oppToEdit: {
            id: this.props.reduxState.detailReducer.id,
            img_url: '',
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
        //build a new object in state
        console.log('building a new opp', this.state.oppToEdit);
        this.setState({
            oppToEdit: {
                ...this.state.oppToEdit,
                [propertyValue]: event.target.value,
            }
        })
    }

    submitEdit = () => {
        // dispatches edit to redux
        console.log('clicking to submit edit', this.state.oppToEdit);
        this.goDetail();
    }

    goDetail = () => {
        console.log('clicking to go detail', this.props.match.params.id );
        this.props.history.push(`/detail/${this.props.reduxState.detailReducer.id}`)
    }

    render() {
        console.log(this.props.reduxState.detailReducer);
        return (
            <div>
                <br></br>
                <input placeholder="enter an image_url" value={this.state.oppToEdit.image_url} onChange={(event) => this.editThisOpp(event, 'image_url')}></input>
                <input defaultValue={this.state.oppToEdit.name} value={this.state.oppToEdit.name} onChange={(event) => this.editThisOpp(event, 'name')}></input>
                <input defaultValue={this.state.oppToEdit.description} value={this.state.oppToEdit.description} onChange={(event) => this.editThisOpp(event, 'description')}></input>
                <input defaultValue={this.state.oppToEdit.contact} value={this.state.oppToEdit.contact} onChange={(event) => this.editThisOpp(event, 'contact')}></input>
                <input defaultValue={this.state.oppToEdit.email} value={this.state.oppToEdit.email} onChange={(event) => this.editThisOpp(event, 'email')}></input>
                <input defaultValue={this.state.oppToEdit.phone} value={this.state.oppToEdit.phone} onChange={(event) => this.editThisOpp(event, 'phone')}></input>
                <input defaultValue={this.state.oppToEdit.web_address} value={this.state.oppToEdit.web_address} onChange={(event) => this.editThisOpp(event, 'web_address')}></input>
                <input defaultValue={this.state.oppToEdit.social} value={this.state.oppToEdit.social} onChange={(event) => this.editThisOpp(event, 'social')}></input>
                <input defaultValue={this.state.oppToEdit.street_address} value={this.state.oppToEdit.street_address} onChange={(event) => this.editThisOpp(event, 'street_address')}></input>
                <input defaultValue={this.state.oppToEdit.city} value={this.state.oppToEdit.city} onChange={(event) => this.editThisOpp(event, 'city')}></input>
                <input defaultValue={this.state.oppToEdit.zip} value={this.state.oppToEdit.zip} onChange={(event) => this.editThisOpp(event, 'zip')}></input>
                <button onClick={this.submitEdit}>submit changes</button>
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