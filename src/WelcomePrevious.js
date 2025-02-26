
/* // import React from "react";
// import './Welcome.css'; // External CSS
// class Welcome extends React.Component {

//     constructor(props) {
//         super(props);
//     }

//     render() {
//         return <h2>Welcome to the Dashboard</h2>;
//         /* let myStyle = {
//             color: 'blue',
//             fontSize: ' 40px'
//         };

//         return (<div>
//             <div style={{ border: '12px solid red', backgroundColor: 'yellow' }}>
//                 <div style={myStyle}>Welcome Class Component</div>
//                 <div style={myStyle}>Props Title is {this.props.title}</div>
//             </div>
//             <div className="anotherDiv demo">This is another div</div>
//             <div className="anotherDiv">This is another div 2</div>
//             <div id="username">Shamim</div>
//         </div>); */
//     }
// }

// export default Welcome;

import React from "react";
import './Welcome.css'; // External CSS
import { Link } from 'react-router-dom';

class Welcome extends React.PureComponent {
// class Welcome extends React.Component {

    constructor(props) { // lifecycle
        super(props);
        this.state = {
            username: "Rishi",
        }
    }

    updateUsername = () => {
        this.setState({ // Update component state, whenever state update component rerender
            username: "Ravi"
        })
    }

    /*
    shouldComponentUpdate() { // by default component update value, we can change as well
        return true;
    }
    */

    render() { // lifecycle
        console.log(this.state);
        let myStyle = {
            color: 'blue',
            fontSize: ' 40px'
        };

        return (<div>
            <div style={{ border: '12px solid red', backgroundColor: 'yellow' }}>
                <div style={myStyle}>Welcome Class Component</div>
                <div style={myStyle}>Props Title is {this.props.title}</div>
            </div>
            <h1>Username State is {this.state.username}</h1>
            <button onClick={this.updateUsername} className="btn btn-outline-primary">Update Username</button>

            <div className="anotherDiv demo">This is another div</div>
            <div className="anotherDiv">This is another div 2</div>
            <div id="username">Shamim</div>

            <Link className="btn btn-primary">Sample</Link>
            <button>Sample</button>
        </div>);
    }
}

export default Welcome; /*  */