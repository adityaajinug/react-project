import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section className="flex justify-center items-center flex-col h-screen gap-6 bg-black">
        <h1 className="text-3xl text-red-400 font-semibold">
          Hello world React Ts!
        </h1>
        <div className="flex gap-3">
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="w-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="w-16" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React Ts</h1>
        <div className="flex justify-center flex-col items-center">
          <button
            className="bg-[#1a1a1a] text-white px-3 py-2 rounded-md focus:border-2 focus:border-blue-500 max-w-[140px]"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="text-white">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <a
          href="https://github.com/adityaajinug"
          className="hover:text-red-500 font-semibold text-white"
        >
          Aditya Ajie Nugroho
        </a>
      </section>
    </>
  );
}

export default App;
