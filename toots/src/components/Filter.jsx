import { useState } from "react";


const Filter = () => {
    const [search, setSearch] = useState([]);

    const users = [
        { id: 1, name: 'Alice', age: 25 },
        { id: 2, name: 'Bob', age: 30 },
        { id: 3, name: 'Charlie', age: 35 }
    ];

    const handleAgeChange = (e) => {

        const userUsers = e.target.value

        const search = (userUsers ? users.filter((user) => user.age.toString().includes(userUsers)) : users);


        setSearch(search)

    };

    console.log(search);


    return (
        <div>
            <h2>Filter user age list</h2>

            <input onChange={handleAgeChange} type="text" id="ageInput" placeholder="Enter age" />


            <div>
                {search.map((user) => {
                    return (
                        <div key={user.id}>
                            <p>{user.name} - {user.age}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Filter;