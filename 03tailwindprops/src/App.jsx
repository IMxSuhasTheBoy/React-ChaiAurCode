import { useState } from "react";
import Card from "./components/Card";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userMame: "suhas",
    age: 19,
  };
  let newArr = [3, 2, 1];

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind Test
      </h1>
      <Card userName="UserInd" btnText="go India" />
      <Card userName="UserBan" btnText="go Bangaladesh" />
    </>
  );
}

export default App;
