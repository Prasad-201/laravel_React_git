import http from "../http"; // Assuming this is the HTTP client, e.g., Axios
import { useState, useEffect } from "react";

export default function Home() {
    const [users, setUsers] = useState([]); // State to hold the fetched users

    useEffect(() => {
        fetchAllUsers(); // Fetch users when the component mounts
    }, []); // Empty dependency array means this runs once after initial render

    const fetchAllUsers = () => {
        http.get('users')
            .then(res => {
                setUsers(res.data); // Update state with the fetched users
            })
            .catch(err => {
                console.error("Error fetching users: ", err); // Log any errors
            });
    };

    return (
        <div>
            Home Page
            <div className="table">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Sr No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button>Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
