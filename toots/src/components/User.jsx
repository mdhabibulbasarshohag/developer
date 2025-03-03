import axios from "axios";
import { useEffect, useState } from "react";


const User = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        const response = await axios.get('https://fake-json-api.mock.beeceptor.com/users');
        setUsers(response.data);
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log(users);


    return (
        <div>
            <h2>Users</h2>
            <div>
                {users.map((user) => (
                    <>
                        <img src={user.photo} alt="" />
                        <p key={user.id}>{user.name}</p>
                    </>
                ))}
            </div>
        </div>
    );
};

export default User;