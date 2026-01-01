import React, { useEffect, useState } from "react";
import './User.css';
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const User = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/getall");
                setUsers(response.data);
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        };
        fetchData();
    }, []);

    const deleteUser = async (userId) => {
        try {
            const response = await axios.delete(`http://localhost:8000/api/delete/${userId}`);
            setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
            toast.success(response.data.msg || "User deleted successfully", { position: "top-right" });
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete user", { position: "top-right" });
        }
    };

    return (
        <div className="userTable">
            <div className="addUser">
                <Link to={'/add'} className="addButton">Add User</Link>
            </div>
            <table border={1} cellPadding={20} cellSpacing={2} className="table">
                <thead>
                    <tr>
                        <th>S.No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={user._id}>
                            <td>{index + 1}</td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                            <td className="actionButtons">
                                <Link to={`/edit/${user._id}`} className="editButton">Edit</Link>
                                <button onClick={() => deleteUser(user._id)} className="deleteButton">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default User;