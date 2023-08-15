import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from "../../../data";
// reducer function

//when importing "./demo" if there is a index.js then it will be automatically imported without specification
const Index = () => {
  const [people, setPeople] = useState(data);
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {

      setModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName("");
    }
    else {
      setModal(true);
    }
  }
  return (<>
    {modal && <Modal></Modal>//if modal is true then <Modal> will work 
    }
    <form onSubmit={handleSubmit}>
      <input type="text" name="ppl" id="ppl" value={name} onChange={(e) => setName(e.target.value)}></input>
      <p>
        <button type="submit">Add</button>
      </p>
    </form>
    {people.map((p) => {
      return <p>{p.name}</p>
    })}
  </>);
};

export default Index;
