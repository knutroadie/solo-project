import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import AdminRoute from '../AdminRoute/AdminRoute';
import AboutPage from '../AboutPage/AboutPage';
import OppList from '../OppList/OppList';
import SubmitOpp from '../SubmitOpp/SubmitOpp';
import EditOpp from '../EditOpp/EditOpp';
import OppDetail from '../OppDetail/OppDetail';
import NavBar from '../NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import NewlyAdded from '../NewlyAdded/NewlyAdded';
import './App.css';
import HandsImage from './hands.jpg';

// THIS WILL EVENTUALLY ANIMATE THE HEADER ON SCROLL

// window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").style.fontSize = "40px";
  } else {
    document.getElementById("header").style.fontSize = "65px";
  }
}

class App extends Component {

  componentDidMount() {
    this.props.dispatch({ type: 'GET_OPPS' });
    this.props.dispatch({ type: 'GET_NEW_OPPS' });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <NavBar />
          </header>
          <img id="leftPic" src={HandsImage} alt="hands"/>
          <NewlyAdded />
          <Route path="/" exact component={OppList} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/detail/:id" component={OppDetail} />
          <ProtectedRoute path="/submit" where='/submit' component={SubmitOpp} />
          <AdminRoute path="/edit" component={EditOpp} />
          <Footer />
        </div>
      </Router>
    )
  }
}

const putStateOnProps = (reduxState) => {
  return (
    {
      reduxState
    }
  )
}

export default connect(putStateOnProps)(App);