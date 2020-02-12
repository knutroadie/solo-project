import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  // Redirect,
  // Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
// import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
// import UserPage from '../UserPage/UserPage';
// import InfoPage from '../InfoPage/InfoPage';
import OppList from '../OppList/OppList';
import SubmitOpp from '../SubmitOpp/SubmitOpp';
import EditOpp from '../EditOpp/EditOpp';
import OppDetail from '../OppDetail/OppDetail';
import NavBar from '../NavBar/NavBar';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log('in component did mount');
    this.props.dispatch({ type: 'GET_OPPS' })
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={OppList} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/register" exact component={RegisterPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/detail" component={OppDetail} />
          <Route path="/submit" component={SubmitOpp} />

          {/* eventually make this a Protected Route */}
          <Route path="/edit" component={EditOpp} />

          {/* {JSON.stringify(this.props.reduxState.oppsReducer)} */}

          {/* <Nav /> */}
          {/* <Switch> */}
          {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
          {/* <Redirect exact from="/" to="/home" /> */}
          {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
          {/* <Route
              exact
              path="/about"
              component={AboutPage}
            /> */}
          {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
          {/* <Route
              exact
              path="/login"
              component={UserPage}
            /> */}
          {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
          {/* <Route
              exact
              path="/detail"
              component={OppDetail}
            /> */}
          {/* If none of the other routes matched, we will show a 404. */}
          {/* <Route render={() => <h1>404</h1>} /> */}
          {/* </Switch> */}
          {/* <OppList /> */}
          {/* <SubmitOpp /> */}
          {/* <EditOpp /> */}
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