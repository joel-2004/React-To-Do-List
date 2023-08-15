import React, { useState, useEffect } from 'react';



const ShowHide = () => {
  const [view, setView] = useState(false);
  return <>
    <button onClick={() => { setView(!view) }}>Show/Hide</button>
    {view && <Text></Text> //if view is true it returns <Text></Text>
    }
  </>;
};

const Text = () => {/*since we are toggling the component <Text></Text> and empty
   array in useEffect as second argument will not delete eventListeners*/
  const [size, setSize] = useState(window.innerWidth);
  const change = () => {
    setSize(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", change);
    return () => {
      window.removeEventListener("resize", change);//the cleanup function
    }
  })
  return <div>
    <h1>Window</h1>
    <h1>Size:{size}px</h1>
  </div>
}

export default ShowHide;
