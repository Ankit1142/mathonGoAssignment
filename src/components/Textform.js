import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import { Navlink, useHistory } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// export default function TextForm(props) {

const TextForm = () =>{
    const history=useHistory();
    const [user, setUser]=useState({
        userName: "", Email: "",Points:""
    });

    let name, value;
    const handleInputs = (e) =>{
        console.log(e);
        name=e.target.name;
        value=e.target.value;

        setUser({ ...user, [name]:value});
    }

    const PostData = async(e) => {
         e.preventDefault();

         const { userName, Email ,Points } = user;

         const res = await fetch("http://localhost:3001/leaderboard", {
             method:"POST",
             headers:{
                 "content-type" : "application/json"
             },
             body:JSON.stringify({
                userName, Email ,Points 
             })
         });

         const data = await res.json();
         if(data.status===422 || !data){
             window.alert("invalid registration");
             console.log("invalid registration");
         }else{
            window.alert("registration successfull");
            console.log("registration successfull");
           
            history.push("/textform")
         }

    }
    return (
        <>
            {/* <img src="https://res.cloudinary.com/highereducation/image/upload/v1533591754/TheBestColleges.org/study-notebooks.jpg" alt="" /> */}
            <h1>Welcome to Mathon-Go</h1>
            <h1>Learn from the Best Analyze from the Best</h1>

            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 classNam=" form-titte">Sign up</h2>
                            <form method='POST' className='register-form' id='register-form'>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">User Name</label>
                                    <input type="text" class="form-control" id="formGroupExampleInput" name="userName"
                                    value={user.userName}
                                    onChange={handleInputs}   
                                    placeholder="Username" 
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput2">Email</label>
                                    <input type="email" class="form-control" id="formGroupExampleInput2" name="Email"
                                    value={user.Email}
                                    onChange={handleInputs}
                                    placeholder="Email"
                                    />
                                </div>
                                <div class="form-group">
                                    <label for="formGroupExampleInput3">Points</label>
                                    <input type="number" class="form-control" id="formGroupExampleInput3" name="Points"
                                    value={user.Points}
                                    onChange={handleInputs}
                                    placeholder="Points"
                                    />
                                </div>
                                        {/* <input className="form-submit " type="submit" name="signup" id="signup" value="register"    
                                        onClick={PostData} />   */}
                                        <li className="nav-item ">       
                                            <Link className="nav-link active registor" aria-current="page" to="/leaderboard">Register</Link>
                                        </li> 
                            
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TextForm
