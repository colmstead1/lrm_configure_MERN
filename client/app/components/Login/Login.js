import React, { Component } from 'react';
//import {Link} from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      login: "false"
    };
  }
  isLoggedIn = () =>{
      this.state.login = "true";
  };
  isLoggedOut = () =>{
    this.state.login = "false";
  };


  render() {
    // if logged out you're directed here onload
      return (
        <div id="login-page">
          <div>
            <h2>Access Your GitHub Projects</h2>
            <a id="githubButton" href="https://github.com/login/oauth/authorize?client_id=629e93dcd67398b8f56a">Sign in with Github</a>
            <button onClick={this.isLoggedIn}>Click to Login</button>
            <button onClick={this.isLoggedOut}>Click to Log Out</button>
            /*<div>{this.state.login}</div>*/
          </div>
        </div>
      );
    }
}
