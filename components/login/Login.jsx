import React, { Component } from "react";

import "./login.css";
import { createBrowserHistory } from "history";
import axios from 'axios'
const API = "https://reqres.in/api/login"

export default class LoginNew extends Component {
  constructor() {
    super();
  }

  login(){
    let payload = {
      "email": "eve.holt@reqres.in",
      "password": "cityslicka"
    }
    axios.post(API,payload)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="cityscape">
        <div className="building building-animate">
          <div className="clouds">
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    );
  }
}
