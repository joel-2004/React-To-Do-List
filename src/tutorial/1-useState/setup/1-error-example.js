import React from 'react';

const ErrorExample = () => {
  let title = "random"
  const random = () => {

    title = "abbada";
    //note that we are not able to re-render our title when the button is cliked, this is one reason to go for useState
  }
  return (<>
    <h1 className='head1'>{title}</h1>
    <button type='button' onClick={random}>Reset</button>
  </>);
};

export default ErrorExample;
