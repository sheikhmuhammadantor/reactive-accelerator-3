import { useState } from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);

  // const handleClick = () => {
  //   setInterval(() => {
  //     setCounter(num => num + 1);
  //   });
  // }

  const handleClick = () => {
    setInterval(() => {
      setCounter(num => num + 1);
    }, 0); // 0ms = as fast as the event loop allows
  };

  return (
    <>
      <h1>React Counter {counter}</h1>
      <button onClick={handleClick}>+++ !</button>
    </>
  )
}

export default App
