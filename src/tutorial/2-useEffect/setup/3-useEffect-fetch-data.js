import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  }
  useEffect(() => {
    getUsers();
  }, [])
  return (<>
    <h1>Hello</h1>
    {
      users.map((e) => {
        return (

          <div key={e.id}>
            <h1>{e.id}</h1>
            <h1>{e.login}</h1>
            <img src={e.avatar_url} alt="sorry"></img>
            <p>
              <a href={e.html_url}>Html Url</a>
            </p>
          </div>
        );
      })
    }
  </>);
};

export default UseEffectFetchData;
