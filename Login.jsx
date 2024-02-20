import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Signimg from "./Signimg";
import { NavLink, useNavigate } from 'react-router-dom'; // Assuming you're using react-router-dom for routing

const Login = () => {

    const history=useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    });

    const [data, setData] = useState([]);

    const getData = (e) => {
        const { value, name } = e.target;
        setInpval((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const addData = (e) => {
        e.preventDefault();

        const getuserArr=localStorage.getItem("usersdata")
        const { email, password } = inpval;

        if (email === "") {
            alert("Email field is required");
        } else if (!email.includes('@')) {
            alert("Please enter a valid email");
        } else if (password === "") {
            alert("Password field is required");
        } else {

            // these are used to check our email and password data is correct or not
            if(getuserArr && getuserArr.length){
                const userData=JSON.parse(getuserArr);
                const userlogin=userData.filter((ele , k)=>{
                    return ele.email === email && ele.password=== password
                });

                if(userlogin.length === 0){
                    alert("invalid Details")
                }
                else{
                    // console.log('succecfull');
                    localStorage.setItem("user_login",JSON.stringify(userlogin))
                    history("/details")
                }
            }

            
        }
    };

    return (
        <>
            <div className="container mt-5">
                <section className="d-flex justify-content-between">
                    <div className="left_data" style={{ width: "100%" }}>
                        <h2 className="text-center col-lg-6">Login</h2>
                        <Form onSubmit={addData}>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control
                                    onChange={getData}
                                    name="email"
                                    type="email"
                                    placeholder="Enter email"
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control
                                    onChange={getData}
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Don't have an account? <span><NavLink to="/">SignUp</NavLink></span></p>
                    </div>
                    <Signimg />
                </section>
            </div>
        </>
    );
};

export default Login;
