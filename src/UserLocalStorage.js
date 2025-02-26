import React from "react";
class UserLocalStorage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Ajay"
        }
        localStorage.setItem("username", "Swathi"); // key and value pair
        localStorage.setItem("x", "2");
        localStorage.setItem("active", true);
        console.log("UserLocalStorage component constructor");
    }

    componentDidMount() {
        console.log("UserLocalStorage component componentDidMount");
        let value = localStorage.getItem("username"); // taking username from localstorage
        this.setState({ // Whenever state update, component rerender
            name: value
        })
    }

    render() {
        console.log("UserLocalStorage component render");
        return (<>
            <h1>
                Local Storage Example
            </h1>
            <h2>Username is {this.state.name}</h2>
        </>);
    }
}

export default UserLocalStorage;