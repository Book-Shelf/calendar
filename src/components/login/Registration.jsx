import React from "react";
import { Link } from "react-router-dom";
import CalendarHeader from "../CalendarHeader";
import "./style.css";

class Registration extends React.Component {
  state = {
    username: "",
    email: "",
    textPassword: "",
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const result = await fetch("http://localhost:3001/users/register", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((res) => res.json());

    //handle login action
    if (result.status === "ok") {
      //successful registration
      console.log("sucess");
    } else {
      console.log("fail", result.error);
    }
  };

  //setting state with user input
  handleChange = (event) => {
    const atrributeName = event.target.name;
    this.setState({ [atrributeName]: event.target.value });
  };

  render() {
    return (
      <div>
        <CalendarHeader page="/" />
        <div className="content-wrapper">
          <div className="header">Registration</div>
          <div className="content">
            <form className="form" onSubmit={this.handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  name="username"
                  placeholder="username"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">E-mail:</label>
                <input
                  type="email" /*email*/
                  name="email"
                  placeholder="email"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="text"
                  name="textPassword"
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="button">
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Registration;
