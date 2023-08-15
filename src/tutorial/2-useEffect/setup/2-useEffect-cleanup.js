import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerHeight);
  const change = () => {
    setSize(window.innerHeight);
  }
  useEffect(() => {
    console.log("useEffect")
    window.addEventListener("resize", change);/*after every time 
    use effect is called it creates a bounch of event listerners. it will slow down the website,so we need to 
    clean it up*/
    return () => {
      console.log("cleanedUp");
      window.removeEventListener("resize", change);
    }
  })//can fix with empty array but cleanup is a better practice 
  return (
    <>
      <h1>{size} px</h1>
    </>
  );
}

export default UseEffectCleanup;
