import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  function click() {
    setPeople([]);//setting the value of array to empt i.e clearing the list
  }
  function add() {
    let a = "demo";
    setPeople([...people, a]);
  }
  const [people, setPeople] = React.useState(data);
  return (
    <>
      {
        people.map((p) => {
          return (<div key={p.id}>
            <h1>{p.name}</h1>

          </div>);
        })}
      <button onClick={() => click()}>Clear</button>
      <button onClick={() => add()}>Add</button>
      {/* Using arrow function so that rerender doesent go to infinite loop */}

    </>);

};

export default UseStateArray;
