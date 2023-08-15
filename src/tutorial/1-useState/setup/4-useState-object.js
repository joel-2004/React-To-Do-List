import React from 'react';

const UseStateObject = () => {
  const [person, setPerson] = React.useState({ name: "joel", age: 19, country: "India" });
  const Change = () => {
    if (person.name === "joel") {
      setPerson({ name: "demo1", age: 20, country: "brazil" });
    }
    else {
      setPerson({ name: "joel", age: 19, country: "India" })
    }
  }
  const [name, setName] = React.useState("joel");//can use as many useStates if required
  return (<>
    <h1>{person.name}</h1>
    <h1>{person.age}</h1>
    <h1>{person.country}</h1>
    <button type="button" onClick={() => setPerson({})}>Clear</button>
    {/* Clear the data of the object ie set it as empty */}
    <button type="button" onClick={Change}>Change</button>
    {/* change the value to some value */}
  </>);
};

export default UseStateObject;
