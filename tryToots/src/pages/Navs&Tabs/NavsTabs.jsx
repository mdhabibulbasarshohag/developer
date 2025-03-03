// import { useEffect, useState } from "react";
import { useEffect, useState } from 'react';
import Button from './../../toots/common/Button';
import Modal from '../../toots/common/Modal';

const NavsTabs = () => {
    const [users, setUsers] = useState([]);
    const [activeTab, setActiveTab] = useState(0);

    const [activeModal, setActiveModal] = useState(false);

    const [modal, setModal] = useState(false);

    const fetchData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
    };

    useEffect(() => {
        fetchData();
    }, []);

    // console.log(users);
    // console.log(activeTab);

    return (
        <div>
            <h1>Nav&apos;s Tabs</h1>

            <Modal onClick={() => setActiveModal(!activeModal)} visible={activeModal}>

                <div>Modal content</div>

            </Modal>

            <Button onClick={() => setActiveModal(!activeModal)}>Open Modal</Button>

            <Button onClick={() => setModal(!modal)}>Open Modal</Button>

            <Modal visible={modal} onClick={() => setModal(!modal)}>
                <div className="flex">
                    <div className="w-[300px] bg-blue-300 flex flex-col gap-5 items-start">
                        {users.map((user) => (
                            <Button
                                key={user.id}
                                onClick={() => setActiveTab(user.id)}

                            >
                                button={user.name}
                            </Button>
                        ))}
                    </div>
                    <div>
                        {users.length > 0 &&
                            users
                                .filter((user) => user.id === activeTab)
                                .map((user) => (
                                    <div key={user.id}>
                                        <h2>{user.name}</h2>
                                        <p>{user.email}</p>
                                        <p>{user.address.street}</p>
                                        <p>{user.address.city}</p>
                                        <p>{user.phone}</p>
                                        <p>{user.website}</p>
                                        <p>{user.company.name}</p>
                                    </div>
                                )
                                )
                        }
                    </div>
                </div>
            </Modal>
        </div>
    );
};

export default NavsTabs;
