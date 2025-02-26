import React from 'react';
import { Link } from 'react-router-dom';

function RegisterSuccessful() {
    return (
        <div>
            <h2>Registration Successful!</h2>
            <p>Welcome to our platform.</p>
            <Link to="/">
                <button className="btn btn-primary">Go to Home</button>
            </Link>
        </div>
    );
}

export default RegisterSuccessful;
