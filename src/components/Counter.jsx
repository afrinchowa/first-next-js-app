"use client";

import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div className="flex items-center justify-center space-x-4">
        <h1>Simple Counter</h1>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={() => setCount(count - 1)}
            className="p-4 bg-red-500 rounded hover:bg-red-900"
          >
            {" "}
            -{" "}
          </button>
          <span className="text-3xl font-semibold text-gray-800" p-5>
            {count}
          </span>
          <button
            onClick={() => setCount(count + 1)}
            className="p-4 bg-green-500 rounded hover:bg-green-900"
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
