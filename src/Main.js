import React from "react";
import ProductList from "./ProductList";
import App from "./App";
import Welcome from "./Welcome";
import UserList from "./UserList";
// import AddProduct from './AddProduct';
// import Title from './Title';
import Login from "./Login";
import RegisterClass from "./RegisterClass";
import UserLocalStorage from "./UserLocalStorage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
// import NotFound from './NotFound';
// import ProductDetail from './ProductDetail';
// import Bootstrap from './Bootstrap/Bootstrap';
// import HooksExample from './hooks/HooksExample';
// import ReactBootstrap from './ReactBootstrap/ReactBootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

import { removeProduct, loadProducts, addProduct } from "./redux/actions";
import LoginSuccessful from "./LoginSuccessful";
import RegisterSuccessful from "./RegisterSuccessful";

export default class Main extends React.Component {
  // class component
  constructor(props) {
    super(props);
    console.log("This is constructor lifecycle - 1");
    this.state = {
      username: "Rishi",
      products: [
        {
          productId: 1,
          productName: "Leaf Rake",
          productCode: "GDN-0011",
          releaseDate: "March 19, 2016",
          description: "Leaf rake with 48-inch wooden handle.",
          price: 19.95,
          starRating: 3.2,
          imageUrl:
            "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
        },
        {
          productId: 2,
          productName: "Garden Cart",
          productCode: "GDN-0023",
          releaseDate: "March 18, 2016",
          description: "15 gallon capacity rolling garden cart",
          price: 32.99,
          starRating: 4.2,
          imageUrl:
            "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png",
        },
        {
          productId: 3,
          productName: "Hammer",
          productCode: "TBX-0048",
          releaseDate: "May 21, 2016",
          description: "Curved claw steel hammer",
          price: 8.9,
          starRating: 4.8,
          imageUrl:
            "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png",
        },
        {
          productId: 4,
          productName: "Saw",
          productCode: "TBX-0022",
          releaseDate: "May 15, 2016",
          description: "15-inch steel blade hand saw",
          price: 11.55,
          starRating: 3.7,
          imageUrl:
            "https://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png",
        },
        {
          productId: 5,
          productName: "Video Game Controller",
          productCode: "GMG-0042",
          releaseDate: "October 15, 2015",
          description: "Standard two-button video game controller",
          price: 35.95,
          starRating: 4.6,
          imageUrl:
            "https://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png",
        },
      ],
    };

    console.log("Main Component Props is ", this.props);
  }

  updateUsername = () => {
    this.setState({
      // Update component state, whenever state update component rerender
      username: "Ravi",
    });
  };

  componentDidMount() {
    this.props.dispatch(removeProduct(1)); // calling action
    console.log(this.props.products);
    this.props.dispatch(
      addProduct({
        productId: 6,
        productName: "iPhone",
        productCode: "GDN-323",
        releaseDate: "March 19, 2025",
        description: "iphone good phone",
        price: 19.95,
        starRating: 5,
        imageUrl:
          "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png",
      })
    );
    this.props.dispatch(loadProducts());
  }

  render() {
    // lifecycle
    console.log("This is render lifecycle - 2");
    console.log(this.state);
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Welcome />} />
              {/* <Route path="/addproduct" element={<AddProduct />} />
                        <Route path="/products" element={<ProductList products={this.props.products} />} /> */}
              {/* <Route path="/title" element={<Title mobile="iphone" />} /> */}
              <Route path="/app" element={<App />} />
              {/* <Route path="/users" element={<UserLocalStorage />} /> */}
              <Route path="/register" element={<RegisterClass />} />
              <Route path="/users" element={<UserList />} />
              {/* <Route path="/productDetail/:productid" element={<ProductDetail />} /> */}
              {/* <Route path="/bs" element={<Bootstrap />} /> */}
              {/* <Route path="/reactbs" element={<ReactBootstrap />} /> */}
              {/* <Route path="/hooks" element={<HooksExample />} /> */}
              {/* <Route path="*" element={<NotFound />} /> */}
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/loginsuccess" element={<LoginSuccessful />} />
            <Route
              path="/RegisterSuccessful"
              element={<RegisterSuccessful />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

/* import React from "react";
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
import UserLocalStorage from "./UserLocalStorage";

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
          <UserLocalStorage />
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
