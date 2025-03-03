import { useState } from "react";


const Password = () => {
    const [password, setPassword] = useState(false);


    const hshshs = () => {
        setPassword(!password)
    }

    return (
        <div>
            <input type={password ? 'text' : 'password'} placeholder='password' />
            <button onClick={hshshs}>Toggle Password</button>
        </div>
    );
};

export default Password;