import { Link, useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from "react";
import axios from 'axios';
import "../addUser/add.css";
import toast from 'react-hot-toast';

const Edit = () => {
    const users = {
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    }

    const { id } = useParams();
    const navigate = useNavigate();
    const [user, setUser] = useState(users);

    const inputChangeHandler = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/getone/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.put(`http://localhost:8000/api/update/${id}`, user)
            .then((response) => {
                toast.success(response.data.msg || "User updated successfully!", { position: "top-right" });
                navigate("/");
            })
            .catch((error) => {
                console.log(error);
                toast.error("Failed to update user", { position: "top-right" });
            });
    }

    return (
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Update user</h3>
            <form className='addUserForm' onSubmit={submitForm}>
                <div className='inputGroup'>
                    <label htmlFor="first_name">First name</label>
                    <input 
                        type="text" 
                        value={user.first_name}
                        onChange={inputChangeHandler}
                        id='first_name' 
                        name='first_name' 
                        autoComplete='off' 
                        placeholder='First name' 
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="last_name">Last name</label>
                    <input 
                        type="text" 
                        value={user.last_name}
                        onChange={inputChangeHandler}
                        id='last_name' 
                        name='last_name' 
                        autoComplete='off' 
                        placeholder='Last name' 
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        value={user.email}
                        onChange={inputChangeHandler}
                        id='email' 
                        name='email' 
                        autoComplete='off' 
                        placeholder='Email' 
                    />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        value={user.password}
                        onChange={inputChangeHandler}
                        id='password' 
                        name='password' 
                        autoComplete='off' 
                        placeholder='Password' 
                    />
                </div>
                <div className='inputGroup'>
                    <button type="submit">Update User</button>
                </div>
            </form>
        </div>
    )
}

export default Edit;