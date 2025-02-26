import React from 'react';
import { Navigate } from 'react-router-dom';

class RegisterClass extends React.Component {
    constructor() {
        super();
        this.state = { 
            redirect: false
        };
    }

    handleSubmit = (event) => {
        event.preventDefault(); 

        const fullname = event.target.elements.fullname.value.trim();
        const email = event.target.elements.email.value.trim();
        const password = event.target.elements.password.value.trim();
        const confirmPassword = event.target.elements.confirmPassword.value.trim();

        // Validation
        if (!fullname) {
            alert("Enter Fullname");
            return;
        } else if (!email) {
            alert("Enter Email");
            return;
        } else if (!password) {
            alert("Enter Password");
            return;
        } else if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        let user = { fullname, email, password };

        let users = localStorage.getItem("users") 
            ? JSON.parse(localStorage.getItem("users")) 
            : [];

        users.push(user);
        localStorage.setItem("users", JSON.stringify(users));

        // Trigger Redirect after successful registration
        this.setState({ redirect: true });
    };

    render() {
        if (this.state.redirect) {
            return <Navigate to="/RegisterSuccessful"/>;
        }

        return (
            <div>
                <h1>Register</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>Fullname</label>
                    <input type="text" placeholder="Enter fullname" name="fullname" /><br />

                    <label>Email</label>
                    <input type="text" placeholder="Enter email" name="email" /><br />

                    <label>Password</label>
                    <input type="password" placeholder="Enter password" name="password" /><br />

                    <label>Confirm Password</label>
                    <input type="password" placeholder="Enter confirm password" name="confirmPassword" /><br />

                    <button className="btn btn-danger" type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default RegisterClass;
