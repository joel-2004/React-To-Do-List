import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => { // code modified from last one ./4-form/1-controlledinputs

  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({ name: "", email: "", age: "" });
  const submit = (e) => {

    e.preventDefault();
    if (person.age && person.name && person.age) { // insted of person.name==="" 
      const tempPerson = { ...person, id: new Date().getTime().toString() }
      setPeople((e) => {
        return [...people, tempPerson];
      });
      setPerson({ name: "", email: "", age: "" });
    }
    console.log(people);
  }
  const handleChange = (e) => {
    let name = e.target.name;//example "name","email" from the name tag
    let value = e.target.value;
    setPerson({ ...person, [name]: value })//dynamically storing so the the name matches the value
  }

  return (

    <div>
      <form onSubmit={submit}>
        <p>
          <label htmlFor="name">Name </label>
          <input type="text" id="text" name="name" value={person.name} onChange={handleChange}></input>
        </p>
        <p>
          <label htmlFor="email">Email </label>
          <input type="email" id="email" name="email" value={person.email} onChange={handleChange}></input>
        </p>
        <p>
          <label htmlFor="age">age </label>
          <input type="text" id="age" name="age" value={person.age} onChange={handleChange}></input>
        </p>
        <p>
          <button type="submit">Submit</button>
        </p>
      </form>

      {
        people.map((p) => {
          return (<div key={p.id}>
            <h1>{p.name}</h1>
            <h1>{p.email}</h1>
            <h1>{p.age}</h1>
          </div>
          )
        })
      }

    </div>
  );
};

export default ControlledInputs;
