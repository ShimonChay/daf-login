import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import InputComponent from "./components/inputComponent";

function App() {
  //use state, getting a value, and return the value and function to set the value.  (rendering the page if the value change)
  const [number, setNumber] = useState(1);
  const [string, setString] = useState("sheker");

  // use effect, getting a function and array of dependancies, if one of the depend changed, the function will invoke.
  // to call the function when the component mount, you should send an empty array.
  // to call the function when the component unmount, you should return a function in the useEffect.
  useEffect(() => {
    const id = setInterval(() => {
      console.log("inter");
    }, 1000);

    return clearInterval(id);
  }, [number, string]);

  const increment = () => {
    // its an option to update the state, you can use setNumber(number + 1) instade.
    setNumber((num) => num + 1);
  };

  const decrement = () => {
    setNumber((num) => num - 1);
  };

  const buttons = [
    { name: "inc", func: increment },
    { name: "dec", func: decrement },
  ];

  return (
    <div className="App">
      <InputComponent propNumber={number} increase={increment}></InputComponent>
      {/* for running on an array of elements and create an elements use map  */}
      {buttons.map((el) => (
        <button key={el.name} onClick={el.func}>{el.name}</button>
      ))}
    </div>
  );
}

export default App;
