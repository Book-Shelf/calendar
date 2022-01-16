import React from "react";
import { Link } from "react-router-dom";
import CalendarHeader from "../CalendarHeader";
import "./style.css";

class Login extends React.Component {
  /*constructor(props){
        super(props);
    }*/
  state = {
    username: "",
    textPassword: "",
  };

  handelSubmit = async (event) => {
    event.preventDefault();
    const result = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((res) => res.json());

    if (result.status === "ok") {
      console.log("sucess");
    } else {
      console.log("fail");
    }
  };

  handleChange = (event) => {
    const atrributeName = event.target.name;
    this.setState({ [atrributeName]: event.target.value });
  };

  render() {
    return (
      <div>
        <CalendarHeader page="/" />
        <div className="content-wrapper">
          <div className="header">Login</div>
          <div className="content">
            <form className="form" onSubmit={this.handelSubmit}>
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
                <label htmlFor="password">Password:</label>
                <input
                  type="text"
                  name="textPassword"
                  placeholder="password"
                  onChange={this.handleChange}
                />
              </div>
              <button type="submit" className="button">
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
