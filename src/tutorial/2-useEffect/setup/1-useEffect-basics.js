import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("UseEffect");
    if (value === 0)//can use if inside the hooks, cannot use if to call hooks
      document.title = "hello";
    else
      document.title = "hello" + value;
  }, [value]) //the second argument is the dependancy, if it is empty it will only render once
  //note that after the empty array is added as the second argument the title does not change (it does not rerender alsoe)
  //if [value] is put it rerenders as usual
  console.log("Render");//every time the components are rendered useEffect also renders
  return <>
    <h1>{value}</h1>
    <button type='button' onClick={() => { setValue(value + 1) }}>Button</button>
  </>;
};

export default UseEffectBasics;
