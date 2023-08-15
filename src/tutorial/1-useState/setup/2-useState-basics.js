import React, { useState } from 'react';

const UseStateBasics = () => {//the component for using useState must be uppercase "UseStateBasics" in this case
  //console.log(useState());
  /*use state is an array and then a function, the array is the data and the function is the
  operations we do with the data*/
  // const value = useState(1)[0];//data
  // const handler = useState(1)[1];//function
  // console.log(value, handler);

  //cannot call hooks conditionally example:if(useState())
  //can call the function inside the hook conditionall example : see below in setTest();
  const [test, setTest] = useState("Lol");
  function Change() {//this function has to be inside the component where its data is
    if (test === "Lol")
      setTest("worked");
    else if (test === "worked")
      setTest("Lol");
  }
  return (
    <>
      <h1>{test}</h1>
      <button type="button" onClick={Change}>change</button>
      {/* Change is the function call that then can be used to alter the value of title using useState*/}
    </>
  );
};

export default UseStateBasics;
