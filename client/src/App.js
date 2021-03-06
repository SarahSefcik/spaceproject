import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css'; 
import AuthHelperMethods from './components/AuthHelperMethods';
import withAuth from './components/withAuth';
import Search from './components/Search/Search';
import SearchForm from './components/Search/SearchForm';
import Items from "./pages/Items";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";


class App extends Component {

/* Create a new instance of the 'AuthHelperMethods' component*/
  Auth = new AuthHelperMethods();

  state = {
    username: "",
    password: ""
  }

/* Here will want to add a method to log the user out upon clicking 'Logout' */
  _handleLogout = () => {
    this.Auth.logout();
    this.props.history.replace('/login');
  }

  //Render the protected component
  render() {
    let name = null;

    //This will be null until we set up authentication...
    if (this.props.confirm) {
      name = this.props.confirm.username;
    }

    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            <Route exact path="/" component={Items} />
            <Route exact path="/items" component={Items} />
            <Route exact path="/items/:id" component={Detail} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      <div className="App">
        <div className="main-page">
          <div className="top-section">
            <h1>Welcome, {name}</h1>
          </div>
          <div >
            <Search />
            <SearchForm />
          </div>
          <div className="bottom-section">
            <button onClick={this._handleLogout}>LOGOUT</button>
          </div>
          <div>
            <h1>this is the user page! app.js</h1>
        </div>
        </div>
      </div>
      </Router>
    );
  }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.
export default withAuth(App);
