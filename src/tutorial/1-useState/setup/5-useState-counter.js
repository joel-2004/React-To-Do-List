import React, { useState } from 'react';

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);
  const Decrease = () => {
    setCounter(counter - 1);
  }
  const complex = () => {
    setTimeout(() => {
      // setCounter(counter - 1);if we do this and press decrese thrice also it will only decrease one. Because setCounter has the old value
      setCounter((prevvalue) => {
        return prevvalue - 1;//notice that if we press decrese thrice together,it still works
      })
    }, 2000)
  }
  return (<>
    <h1>{counter}</h1>
    <button type="button" onClick={Decrease}>Decrease</button>
    <button type='button' onClick={() => { setCounter(counter + 1) }}>Increase</button>
    <button type='button' onClick={() => setCounter(0)}>Reset</button>
    <hr></hr>
    <h1>{counter}</h1>
    <button type="button" onClick={complex}>Decrease</button>
    <button type='button' onClick={() => { setCounter(counter + 1) }}>Increase</button>
    <button type='button' onClick={() => setCounter(0)}>Reset</button>
  </>);
};

export default UseStateCounter;
