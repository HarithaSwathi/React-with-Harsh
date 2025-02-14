import { Link, Outlet } from "react-router-dom";
import "./Nav.css"
function Nav() {
    return (
    <>
    <nav>
    <nav className="nav-bar">
      <Link to="/chat">Group Chat</Link>
      <Link to="/users">Manage Users</Link>
      <Link to="/documents">Manage Documents</Link>
      <Link to="/logout">Logout</Link>
    </nav>
</nav>
<div>
<Outlet />
</div>
    </> 
    );
}

export default Nav;