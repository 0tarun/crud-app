import {Link, useNavigate} from 'react-router-dom';
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./add.css";

const Add = () => {
    const users = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    };

    const [user, setUser] = useState(users);
    const navigate = useNavigate();

    const inputHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/create", user);
            toast.success("User added successfully!", { position: "top-right" });
            navigate("/");
        } catch (error) {
            console.log(error);
            toast.error("Failed to add user", { position: "top-right" });
        }
    };

    return(
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add new user</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlFor="first_name">First name</label>
                    <input type="text"
                     onChange={inputHandler}
                     id='first_name'
                     name='first_name'
                     autoComplete='off'
                     placeholder='First name' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="last_name">Last name</label>
                    <input type="text"
                     onChange={inputHandler}
                     id='last_name' 
                     name='last_name'
                     autoComplete='off' 
                     placeholder='Last name' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="email">Email</label>
                    <input type="email"
                     onChange={inputHandler}
                     id='email' name='email'
                     autoComplete='off'
                     placeholder='Email' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="password">Password</label>
                    <input type="password"
                     onChange={inputHandler}
                     id='password'
                     name='password' 
                     autoComplete='off'
                     placeholder='Password' />
                </div>
                <div className='inputGroup'>
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    )
}

export default Add;