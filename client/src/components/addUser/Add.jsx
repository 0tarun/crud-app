import {Link} from 'react-router-dom';
import React from "react";
import "./add.css";

const Add = () => {
    return(
        <div className='addUser'>
            <Link to={"/"}>Back</Link>
            <h3>Add new user</h3>
            <form>
                <div className='inputGroup'>
                    <label htmlFor="first_name">First name</label>
                    <input type="text" id='first_name' name='first_name' autoComplete='off' placeholder='First name' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="last_name">Last name</label>
                    <input type="text" id='last_name' name='last_name' autoComplete='off' placeholder='Last name' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="email">Email</label>
                    <input type="email" id='email' name='email' autoComplete='off' placeholder='Email' />
                </div>
                <div className='inputGroup'>
                    <label htmlFor="password">Password</label>
                    <input type="password" id='password' name='password' autoComplete='off' placeholder='Password' />
                </div>
                <div className='inputGroup'>
                    <button type="submit">Add User</button>
                </div>
            </form>
        </div>
    )
}

export default Add;