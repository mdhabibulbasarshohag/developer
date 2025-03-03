import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let countNum = 0;

  const increment = () => {
    countNum = countNum + 1;
    console.log(countNum);
  };

  return (
    <>
      <div className="">
        <h1 className="text-3xl font-bold underline">Hello world!{count} </h1>
        <button
          onClick={() => setCount(count + 1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {increment}

          <div>
            
          </div>
        </button>
      </div>
    </>
  );
}

export default App;
