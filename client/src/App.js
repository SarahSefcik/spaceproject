import React, { Component } from 'react';
import './App.css'; 
import AuthHelperMethods from './components/AuthHelperMethods';
import withAuth from './components/withAuth';
import Search from './components/Search/Search';
import SearchForm from './components/Search/SearchForm';
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
      <div className="App">
        <div className="main-page">
          <div className="top-section">
            <h1>Welcome, {name}</h1>
          </div>
          <div >
            <Nav />
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
    );
  }
}

//In order for this component to be protected, we must wrap it with what we call a 'Higher Order Component' or HOC.
export default withAuth(App);
