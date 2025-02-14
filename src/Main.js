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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from "./Nav";
import ProductList from "./ProductList";
import RegisterClass from "./RegisterClass";
import Welcome from "./Welcome";

export default class Main extends React.Component {
  // class component
  // constructor() {
  //     super();
  //     console.log("This is constructor lifecycle - 1");
  // }
  render() { // lifecycle
    console.log("This is render lifecycle - 2");
    console.log(this.state);
    return (
      <BrowserRouter>
        <div>
          <Nav />
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/chat" element={<ChatList />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/documents" element={<DocumentList />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
    /* return (
      <div>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Nav />}>
    <Route index element={<Welcome />} />
    <Route path="/addproduct" element={<AddProduct />} />
    <Route path="/products" element={<ProductList products={this.state.products} />} />
    <Route path="/title" element={<Title mobile="iphone" />} />
    <Route path="/app" element={<App />} />
    <Route path="/users" element={<UserLocalStorage />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<RegisterClass />} />
    </Routes>
    </BrowserRouter>
    </div>
    ) */
    }
  }
   

/*
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
} */

/* //     return (
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
// export default Main; */