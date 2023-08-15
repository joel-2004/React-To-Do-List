import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const submit = (e) => {
    e.preventDefault();
    if (name !== "" && email !== "") {
      const person = { id: new Date().getTime().toString(), name: name, email: email };

      //alert(person.name + " " + person.email);
      console.log(person);
      setPeople((p) => {
        return [...p, person];
      })
      setEmail("");
      setName("");

    }

    else {
      console.log("not submitted");
    }
  }
  console.log(people);
  return (

    <div>
      <form onSubmit={submit}>
        <p>
          <label htmlFor="name">Name </label>
          <input type="text" id="text" name="name" value={name} onChange={(e) => setName(e.target.value)}></input>
        </p>
        <p>
          <label htmlFor="email">Email </label>
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
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
          </div>
          )
        })
      }

    </div>
  );
};

export default ControlledInputs;
