import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("k");
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  // || if text is true it returns text, else if "hello world" is true it returns it
  // && if text is true it return "hello world", if "hello world " is true it returns text 
  return <div>
    <h1>Value:{firstValue}</h1>
    <h1>Value:{secondValue}</h1>

  </div>;
};

export default ShortCircuit;
