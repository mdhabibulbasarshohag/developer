import { useState } from "react";


const Dev = () => {
    const [age, setAge] = useState(0);

    const devData = 'development data';
    const program = () => {
        const language = "javaScript";
        return language;
    }

    const handleChange = (e) => {
        setAge(e.target.value);

    }


    return (
        <>
            <h1>dev</h1>
            <p>Developer</p>
            <p>{devData}</p>
            <p>Language used: {program()}</p>
            <p>This is a development environment</p>
            <p>rating: {Math.floor(Math.random() * 10)}</p>
            {/* <button> {ageJob >= 18 ? 'click job' : 'your age is less than 18'}</button> */}

            <input className="border border-blue-500 p-2 outline-none " type="text" placeholder="Enter your age" onChange={handleChange} />

            <button className="py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">
                {/* {ageJob >= 18 ? 'available job' : 'not available job'} */}
                {/* {ageJob >= 18 && 'available job' || ageJob < 18 && 'not available job' || ageJob > 100 && 'you are too old'} */}
                {/* 
                {
                    (ageJob >= 100 && 'you are too old') ||
                    (ageJob >= 18 && 'available job') ||
                    (ageJob < 18 && 'not available job')

                } */}
                {/* {ageJob > 100 ? 'you are too old' : ageJob >= 18 ? 'available job' : 'not available job'} */}

                {
                    age && age > 100 ? 'You are too old' : age >= 60 ? 'Eligible for retirement benefits' : age >= 40 ? 'Stable career phase' : age >= 25 ? 'Growing in career' : age >= 18 ? 'Available job' : age >= 16 ? 'Part-time jobs available' : 'Not available job'
                }
            </button>
        </>
    );
};

export default Dev;