import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // console.log(counter);

  //////////////////trying to make logic to limit counter to 0 to 20

  //////////////////

  // let counter = 9; // variable will not propogate in UI

  const addValue = () => {
    // counter = counter + 1; // variable will not propogate in UI

    // counter = counter + 1;
    setCounter(counter + 1);

    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
