import { useState } from "react";
import Header from "./components/header";

// import "./App.css";

function App() {
  return (
    <>
      <Header></Header>
      <button className="bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out">
        Mi Botón
      </button>
    </>
  );
}

export default App;
