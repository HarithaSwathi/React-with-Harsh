import Nav from "./Nav";
import { useNavigate } from "react-router-dom"; // Step 1

function Login() {
  const navigate = useNavigate(); // Step 2

  // const gotToProducts = () => {
  //     navigate("/products"); // Step 3 Navigate it
  // }
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    navigate("/loginsuccess"); // Navigate to Login Success Page
  };

  return (
    <div>
      <Nav />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {/* Corrected form submission */}
        Email <input type="text" name="email" required />
        Password <input type="password" name="password" required />
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </form>
      {/* <button className="btn btn-primary" onClick={gotToProducts}>Navigate to Products</button> */}
    </div>
  );
}

export default Login;
