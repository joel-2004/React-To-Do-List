import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("user");
  const getUser = async () => {
    setIsLoading(true);//meaning we are still loading
    const response = await fetch(url);
    if (response.status >= 200 && response.status <= 299) {//if the https is in this range it has no error
      const user = await response.json();
      setUser(user);
      setIsLoading(false);//setting loading as false once we get the user
    }
    else {
      setIsLoading(false);//note that when i change the users name , it gives error
      setIsError(true);
      // throw new Error(response.status);
    }
  }
  useEffect(() => {
    getUser();

  }, [])
  if (isLoading)

    return (
      <div>
        {/* {alert("loading")//only for my reference,to check if loading works properly
        } */}
        <h1>IsLoading</h1>
      </div>
    );
  if (isError)
    return (<div>
      <h1>Error</h1>
    </div>);
  if (setUser !== "user") {
    return (<div>
      {console.log(user)}
      <h1>Login:{user.login}</h1>
      <h1>id:{user.id}</h1>
      <h1>Node_Id:{user.node_id}</h1>
      <img src={user.avatar_url} alt="haha"></img>
    </div>)
  }
  return (<div>
    <h1>Only prints of none of the if conditions are satisfied</h1>
  </div>);
};

export default MultipleReturns;
