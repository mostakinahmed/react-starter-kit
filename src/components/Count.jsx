import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-lg mt-5 rounded-lg p-6 w-64 text-center space-y-4">
        <h2 className="text-xl font-bold">Counter</h2>
        <div className="text-4xl font-mono text-blue-600">{count}</div>

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => {
              setCount(count - 10);
            }}
            className="px-6 bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
          >
            <span className="text-3xl">-</span>
          </button>

          <button
            onClick={() => {
              setCount(count + 10);
            }}
            className="px-6 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
          >
            <span className="text-3xl">+</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
