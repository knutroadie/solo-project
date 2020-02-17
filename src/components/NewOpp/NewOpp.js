import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class NewOpp extends Component {

    goDetail = (event, opp) => {
        console.log('clicking to go detail', this.props.opp);
        this.props.history.push(`/detail/${opp.id}`)
    }

    render() {
        console.log(this.props.opp);
        
        return (
            <div key={this.props.opp.id} onClick={(event) => this.goDetail(event, this.props.opp)}>
                <li>
                    <h3>{this.props.opp.name}</h3>
                    <img src={this.props.opp.image_url} alt={this.props.opp.name} height="65"></img>
                    <p>{this.props.opp.description}</p>
                </li>
            </div>
        )
    }
}

const putReduxStateOnProps = (reduxState) => {
    return {
        reduxState
    }
}

export default withRouter(connect(putReduxStateOnProps)(NewOpp));