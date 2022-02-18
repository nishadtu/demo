import './App.css';
import React, { Component, useState } from 'react';
import db from './firebase/config';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"



// Start the fetch operation as soon as
// the page loads
// window.addEventListener('load', () => {
//     Fetchdata();
// });

class Read extends Component {

    ;
    constructor(props) {
        super(props);
        this.state = {
            items: [],

        }
    }



    componentDidMount() {
        db.collection("Products").get().then((querySnapshot) => {
            querySnapshot.forEach(element => {
                var data = element.data();
                console.log(data);
                let currentItems = this.state.items;
                currentItems.push(data);
                this.setState({ items: currentItems })
   
            });
        })
    }


    render() {

        return (

            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table table-bordered table-primary'>
                            <thead>
                                <tr>
                                    <th>First name</th>
                                    <th>Last name</th>
                                    <th>Score</th>
                                </tr>
                                {
                                    this.state.items.map((itm, ky) => {
                                        return (
                                            <tr>
                                                <td> {itm.firstname} </td>
                                                <td> {itm.lastname} </td>
                                                <td> {itm.score} </td>
                                            </tr>
                                        )
                                    })

                                }
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}



const Reada = () => {

    const [info, setInfo] = useState([]);

    // Start the fetch operation as soon as
    // the page loads
    window.addEventListener('load', () => {
        Fetchdata();
    });

    // Fetch the required data using the get() method
    const Fetchdata = () => {


        db.collection("Products").get().then((querySnapshot) => {

            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();

                setInfo(arr => [...arr, data]);

            });
        })
    }

    // Display the result on the page
    return (
        <div>
            <center>
                <h2>Student Details</h2>
            </center>

            {
                info.map((data) => (
                    <Frame firstname={data.firstname}
                        lastname={data.lastname}
                        score={data.score} />
                ))
            }
        </div>

    );
}

// Define how each display entry will be structured
const Frame = ({ firstname, lastname, score }) => {
    // console.log(course + " " + name + " " + age);
    return (
        <center>
            <div className="div">

                <p>FIRST NAME : {firstname}</p>


                <p>LAST NAME : {lastname}</p>


                <p>SCORE : {score}</p>

            </div>
        </center>
    );
}

export default Read;