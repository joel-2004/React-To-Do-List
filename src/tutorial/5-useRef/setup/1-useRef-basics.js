import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const ref = useRef(null);
  const pRef = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);//ref is a object that has a key called current
    console.log(pRef.current);

  }

  useEffect(() => {
    console.log(pRef.current);
    pRef.current.focus();//not using an empty array as a second argument because the useRef DOES NOT trigger re-render
  })
  return <>
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" ref={ref}></input>
      <p>
        <button type="submit">Submit</button>
      </p>
    </form>
    <p ref={pRef}>Hello</p>
  </>;
};

export default UseRefBasics;
