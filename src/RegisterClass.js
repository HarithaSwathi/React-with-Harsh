import React from "react";
class RegisterClass extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>Register</h1>
        <form action=".Project/RegisterSuccessful.html" method="get">
          Fullname{" "}
          <input
            type="text"
            placeholder="Enter Full Name"
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
          <button>Register</button>
        </form>
      </>
    );
  }
}

export default RegisterClass;
