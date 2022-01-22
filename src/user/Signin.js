import React, { Component } from "react";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      
      email: "",
      password: "",
        error: "",
      redirectToReferer: false
     
    };
  }

  handleChange = (name) => (event) => {
    this.setState({ error: "" });
    this.setState({ [name]: event.target.value });
  };
  clickSubmit = (event) => {
    event.preventDefault();
    const {  email, password } = this.state;
    const user = {
     
      email,
      password,
    };
    console.log(user );
    this.signin(user).then((data) => {
      if (data.error) {this.setState({ error: data.error });}
      else
      {
          //authrnticate
          //redirect
      }
    });
  };
  signin = (user) => {
    return fetch("http://localhost:8080/signin", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        },
      
      body: JSON.stringify(user),
    })
      .then((response) => {
        return response.json();
      })

      .catch((err) => console.log(err));
  };
  signinForm = (email, password) => (
    <form>
      
      
      <div className="form-group">
        <label className="text-muted">Email</label>
        <input
          onChange={this.handleChange("email")}
          type="email"
          className="form-control"
          value={email}
        />
      </div>
      <div className="form-group">
        <label className="text-muted">Password</label>
        <input
          onChange={this.handleChange("password")}
          type="password"
          className="form-control"
          value={password}
        />
      </div>
      <button onClick={this.clickSubmit} className="btn btn-raised btn-primary">
        Submit
      </button>
    </form>
  );

  render() {
    const {  email, password, error, } = this.state;
    return (
      <div className="container">
        <h2 className="mt-5 mb-5">Signin</h2>
        <div
          className="alert alert-danger"
          style={{ display: error ? "" : "none" }}
        >
          {error}
        </div>
        
        {this.signinForm( email, password)}
      </div>
    );
  }
}

export default Signin;
