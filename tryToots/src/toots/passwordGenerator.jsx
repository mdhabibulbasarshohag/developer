import { useCallback, useState, useEffect, useRef } from "react";

const PasswordGenerator = () => {
    const [password, setPassword] = useState("");
    const [length, setLength] = useState(8);
    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);

    const passwordRef = useRef(null); // Reference input field

    const generatePassword = useCallback(() => {
        let result = "";
        let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        if (numberAllowed) char += "0123456789";
        if (charAllowed) char += "!@#$%^&*()`~()*+-=+,-./:;:";

        for (let i = 0; i < length; i++) {
            let random = Math.floor(Math.random() * char.length);
            result += char.charAt(random);
        }
        setPassword(result);
    }, [length, numberAllowed, charAllowed]);

    useEffect(() => {
        generatePassword();
    }, [generatePassword]);

    // Function to copy password to clipboard
    const copyToClipboard = () => {
        if (passwordRef.current) {
            passwordRef.current.select(); // Select text in input field
            navigator.clipboard.writeText(password).then(() => {
                alert("Password copied to clipboard!"); // Show confirmation
            });
        }
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gray-900 text-white">
            <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
            <div className="flex gap-2">
                <input
                    type="text"
                    value={password}
                    readOnly
                    ref={passwordRef} // Attach ref here
                    className="p-2 mb-4 text-white border rounded w-80"
                />
                <button
                    onClick={copyToClipboard}
                    className="px-3 py-2 bg-green-500 rounded hover:bg-green-600 transition"
                >
                    Copy
                </button>
            </div>
            <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2">
                    <span>Password Length:</span>
                    <input
                        type="number"
                        value={length}
                        onChange={(e) => setLength(Number(e.target.value))}
                        className="w-16 p-1 text-white border rounded"
                        min="4"
                        max="30"
                    />
                </label>
            </div>
            <div className="flex gap-4 mb-4">
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={numberAllowed}
                        onChange={() => setNumberAllowed((prev) => !prev)}
                    />
                    Include Numbers
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={charAllowed}
                        onChange={() => setCharAllowed((prev) => !prev)}
                    />
                    Include Special Characters
                </label>
            </div>
            <button
                onClick={generatePassword}
                className="px-4 py-2 bg-blue-500 rounded hover:bg-blue-600 transition"
            >
                Generate Password
            </button>
        </div>
    );
};

export default PasswordGenerator;
