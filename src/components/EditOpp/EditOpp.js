import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EditOpp extends Component {

    // componentDidMount() {
    //     this.props.dispatch({
    //         type: 'GET_DETAIL',
    //         payload: this.props.match.params.id
    //     })
    // }

    // let oppId = this.props.match.params.id;

    state = {
        oppToEdit: {
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

    submitEdit = () => {
        console.log('clicking to submit edit', this.state.oppToEdit);
        this.goDetail();
    }

    goDetail = () => {
        console.log('clicking to go detail', this.props.params.id);
        this.props.history.push(`/detail/${this.props.params.id}`)
    }

    render() {
        console.log(this.props.reduxState.detailReducer);
        return (
            <div>
                <p>this is the EDIT form</p>
                <input placeholder="enter an image_url"></input>
                <input defaultValue={this.state.oppToEdit.name}></input>
                <input defaultValue={this.state.oppToEdit.description}></input>
                <input defaultValue={this.state.oppToEdit.contact}></input>
                <input defaultValue={this.state.oppToEdit.email}></input>
                <input defaultValue={this.state.oppToEdit.phone}></input>
                <input defaultValue={this.state.oppToEdit.web_address}></input>
                <input defaultValue={this.state.oppToEdit.social}></input>
                <input defaultValue={this.state.oppToEdit.street_address}></input>
                <input defaultValue={this.state.oppToEdit.city}></input>
                <input defaultValue={this.state.oppToEdit.zip}></input>
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