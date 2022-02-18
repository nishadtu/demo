import './App.css';
import React, { Component, useState } from 'react';
import db from './firebase/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            score: ""
        }
    }

    setInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    register = (e) => {
        e.preventDefault();
        // Add data to the store
        db.collection("Products").add({
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            score: this.state.score
        })
            .then((docRef) => {
                alert("Data Successfully Submitted");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }




    render() {
        return (
            <div className='container'>
                <div className='row'>

                    <h1 style={{ marginTop: "50px" }}>Student Details</h1>
                    <div className='col-md-12'>
                        <form>
                            <div className='form-group'>
                                <label>First Name</label>
                                <input type="text" onChange={this.setInput} name="firstname" className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label>Last Name</label>
                                <input type="text" onChange={this.setInput} name="lastname" className='form-control' />
                            </div>
                            <div className='form-group'>
                                <label>Score</label>
                                <input type="text" onChange={this.setInput} name="score" className='form-control' />
                            </div>
                            <div className='form-group text-center'>
                                <Button className='btn btn-primary text-center' onClick={ this.register }>Submit</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }

}





const Appa = () => {
    const [firstname, Setfirstname] = useState("");
    const [lastname, Setlastname] = useState("");
    const [score, Setscore] = useState("");


    const sub = (e) => {
        e.preventDefault();

        // Add data to the store
        db.collection("Products").add({
            firstname: firstname,
            lastname: lastname,
            score: score
        })
            .then((docRef) => {
                alert("Data Successfully Submitted");
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }

    const btnclick = () => {
        db.collection("Products").get().then(snapshot => {
            snapshot.forEach((obj) => {
                console.log(obj.data().firstname)

            })
        })
    }

    return (
        <div>
            <center>
                <form style={{ marginTop: "200px" }}
                    onSubmit={(event) => { sub(event) }}>
                    <input type="text" placeholder="your first name"
                        onChange={(e) => { Setfirstname(e.target.value) }} />
                    <br /><br />
                    <input type="text" placeholder="your last name"
                        onChange={(e) => { Setlastname(e.target.value) }} />
                    <br /><br />
                    <input type="text" placeholder="Score"
                        onChange={(e) => { Setscore(e.target.value) }} />
                    <br /><br />
                    <button type="submit">Submit</button>
                </form>

                <Button className="btn btn-primary" onClick={btnclick}>Click Here</Button>
            </center>
        </div>
    );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
