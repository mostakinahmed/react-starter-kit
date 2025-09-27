import { React, useState } from "react";

function App() {
  //const data = 10;

  let [data, setData] = useState(0);
  let a = 45;

  return (
    <div>
      <h1 className="font-bold px-10 py-4 text-6xl">{data}</h1>
      <button
        className="bg-blue-500 mr-5 ml-5 text-white py-2 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-700"
        onClick={() => {
          setData((data += 10));
        }}
      >
        <span className="text-2xl">+</span>
      </button>
      <button
        className="bg-red-500 text-white py-2 px-6 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 active:bg-red-700"
        onClick={() => {
          setData((data -= 10));
        }}
      >
        <span className="text-2xl">-</span>
      </button>
    </div>
  );
}
export default App;
