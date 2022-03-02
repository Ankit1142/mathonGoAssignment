import '../App.css';
import React, { useState } from 'react'


export default function About() {
    const [myStyle, setMyStyle] = useState(
        {
            color: 'white',
            backgroundColor: 'black'
        })
    // style={myStyle}

    const [btntext, setBtntext] = useState("Enable DarkMode")

    const toggleStyle = () => {
        if (myStyle.color === 'white') {
            setMyStyle(
                {
                    color: 'black',
                    backgroundColor: 'white'
                })
            setBtntext("Enable Dark Mode")
        } else {
            setMyStyle(
                {
                   
                    color: 'black',
                    backgroundColor: 'white'
                })
            setBtntext("Enable Light Mode")
        }
    }

    return (
        <>
            <table class="table" id='leader' >
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Rank</th>
                        <th scope="col">Name</th>
                        <th scope="col">Points</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        
                        <td>Otto</td>
                        <td>898</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                       
                        <td>Thornton</td>
                        <td>898</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                       
                        <td>the Bird</td>
                        <td>898</td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                       
                        <td>Otto</td>
                        <td>898</td>
                    </tr>
                    <tr>
                        <th scope="row">5</th>
                      
                        <td>Thornton</td>
                        <td>898</td>
                    </tr>
                    <tr>
                        <th scope="row">6</th>
                      
                        <td>the Bird</td>
                        <td>898</td>
                    </tr>
                    <tr>
                        <th scope="row">7</th>
                       
                        <td>the Bird</td>
                        <td>898</td>
                    </tr>
                    <tr>
                        <th scope="row">8</th>
                       
                        <td>Otto</td>
                        <td>898</td>
                    </tr>
                    <tr>
                        <th scope="row">9</th>
                       
                        <td>Thornton</td>
                        <td>898</td>
                    </tr>
                    <tr>
                        <th scope="row">10</th>
                        
                        <td>the Bird</td>
                        <td>898</td>
                    </tr>
                </tbody>
            </table>
        </>
    )

}