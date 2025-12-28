import React from "react";
import './User.css';
import { Link } from "react-router-dom";

const User = () => {
    return (
        <div className="userTable">
            <div className="addUser">
                <Link to={'/add'}>Add User</Link>
            </div>
            <table border={1} cellPadding={20} cellSpacing={2} className="table">
                <thead>
                    <tr>
                        <th>S.No:</th>
                        <th>Name:</th>
                        <th>Email:</th>
                        <th>Contact:</th>
                        <th>Address:</th>
                        <th>Action:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1.</td>
                        <td>Tarun Chandra Das</td>
                        <td>tarun@gmail.com</td>
                        <td>+8801234567890</td>
                        <td>Dhaka, Bangladesh</td>
                        <td>
                            <Link to={'/edit'}>Edit</Link>
                            <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}
export default User;