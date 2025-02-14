import React from "react";
import './Welcome.css'; // External CSS
class Welcome extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <h2>Welcome to the Dashboard</h2>;
        /* let myStyle = {
            color: 'blue',
            fontSize: ' 40px'
        };

        return (<div>
            <div style={{ border: '12px solid red', backgroundColor: 'yellow' }}>
                <div style={myStyle}>Welcome Class Component</div>
                <div style={myStyle}>Props Title is {this.props.title}</div>
            </div>
            <div className="anotherDiv demo">This is another div</div>
            <div className="anotherDiv">This is another div 2</div>
            <div id="username">Shamim</div>
        </div>); */
    }
}

export default Welcome;