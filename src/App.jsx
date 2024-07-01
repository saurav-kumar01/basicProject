import "./App.css";
import { useState } from "react";

function App() {
  // let counter = 15;
  const [count, setCount] = useState(15);

  const addValue = () => {
    setCount(count + 1);
  };
  const removeValue = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>Saurav Kumar and my Skills</h1>
      <h2>Counter Value: {count}</h2>

      <button onClick={addValue}>Add value : {count}</button>
      <br />
      <br />
      <button onClick={removeValue}>remove value : {count} </button>
    </>
  );
}

export default App;
