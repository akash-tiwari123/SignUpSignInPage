// Import necessary dependencies
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Signimg from './Signimg';
import { NavLink } from 'react-router-dom'; // Assuming you're using react-router-dom for routing
import { useNavigate } from 'react-router-dom';
const Loginsignout = () => {

    let navigate=useNavigate()

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        date: "",
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

        const { name, email, date, password } = inpval;

        // Validation logic

        if (name === "") {
            alert("name field is requred")
        } else if (email === "") {
            alert("email field is requred")
        } else if (!email.includes('@')) {
            alert("please enter valid email with '@' ")
        } else if (date === "") {
            alert("date field is requred")
        } else if (password === "") {
            alert("password field is requred")
        } else if (password.length < 5) {
            alert("password length should be greater than 5")
        } else {
            // Store data in local storage
            localStorage.setItem("usersdata", JSON.stringify([...data, inpval]));
            
            navigate('/login')
        }

        
    };

    return (
        <>
            <div className="container mt-5">
                <section className='d-flex justify-content-between'>
                    <div className="left_data" style={{ width: "100%" }}>
                        <h2 className='text-center col-lg-6'>Sign Up</h2>
                        <Form onSubmit={addData}>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                                <Form.Control onChange={getData} name='name' type="text" placeholder="Enter Your Full Name" />
                                {/* Add validation message for name if needed */}
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control onChange={getData} name='email' type="email" placeholder="Enter email" />
                                {/* Add validation message for email if needed */}
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                                <Form.Control onChange={getData} name='date' type="date" />
                                {/* Add validation message for date if needed */}
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control onChange={getData} name='password' type="password" placeholder="Password" />
                                {/* Add validation message for password if needed */}
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={addData}>
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span> <NavLink to="/login">SignIn</NavLink> </span></p>
                    </div>
                    <Signimg />
                </section>
            </div>
        </>
    );
};

export default Loginsignout;
