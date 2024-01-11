import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoApp from "./component/TodoApp";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <TodoApp />
    </div>
  );
}

export default App;
