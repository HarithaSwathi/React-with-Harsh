import React from "react";
import ChatList from "./ChatList";
import DocumentList from "./DocmentList";
import EditUser from "./EditUser";
import Login from "./Login";
import LoginSuccessful from "./LoginSuccessful";
import Logout from "./Logout";
import Register from "./Register";
import RegisterSuccessful from "./RegisterSuccessful";
import UserList from "./UserList";

export default class Main extends React.Component {
  // class component
  // constructor() {
  //     super();
  //     console.log("This is constructor lifecycle - 1");
  // }

  render() {
    // lifecycle
    // console.log("This is render lifecycle - 2");
    return (
      <div>
        <div>This is Main Class Component</div>
        <Login />
        <Register />
        <LoginSuccessful />
        <RegisterSuccessful />
        <ChatList />
        <UserList />
        <EditUser />
        <DocumentList />
        <Logout />
      </div>
    );
  }
}
//     return (
//         <>
//             <div>Welcome to Main page</div>
//             <Login />
//             <Register />
//             <LoginSuccessful />
//             <RegisterSuccessful />
//             <ChatList />
//             <UserList />
//             <EditUser />
//             <DocumentList />
//             <Logout />

//         </>
//     );
// }

// export default Main;
