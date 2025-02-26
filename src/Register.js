import React from "react";
import { Navigate } from "react-router-dom";

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      // default value
      redirect: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault(); // stop page refresh
    const fullname = event.target.elements.fullname.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;

    if (fullname === "") {
      alert("Enter Fullname");
    } else if (email === "") {
      alert("Enter Email");
    } else if (password === "") {
      alert("Enter Password");
    }

    let user = {
      fullname: fullname,
      email: email,
      password: password,
    };

    let users = localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : [];

    users.push(user); // add item inside array

    let usersString = JSON.stringify(users); // convert object into string
    localStorage.setItem("users", usersString); // set item in local storage, key and value pair

    this.redirect();
  };

  redirect = () => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    const { redirect } = this.state;
    return (
      <div>
        {redirect && <Navigate to="/RegisterSuccessful" />}
        <h1>Register</h1>
        <form
          action="./RegisterSuccessful.html"
          method="get"
          onSubmit={this.handleSubmit}
        >
          Fullname{" "}
          <input
            type="text"
            placeholder="Enter fullname"
            id="fullname"
            name="fullname"
          />
          <br />
          Email{" "}
          <input
            type="text"
            placeholder="Enter email"
            id="email"
            name="email"
          />
          <br />
          Password{" "}
          <input
            type="password"
            placeholder="Enter password"
            id="password"
            name="password"
          />
          <br />
          Confirm Password{" "}
          <input
            type="password"
            placeholder="Enter confirm password"
            id="confirmPassword"
            name="confirmPassword"
          />
          <br />
          <button className="btn btn-danger">Register</button>
        </form>

        {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button> */}

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">
                  Modal title
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body"></div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <button onClick={this.redirect} className='btn btn-primary m-2'>Redirect to Products</button> */}
      </div>
    );
  }
}

export default Register;
