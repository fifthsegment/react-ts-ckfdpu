import React from 'react';

export default ({}) => {
  let [state, setState] = React.useState(0);

  let increment = () => {
    setState(state + 1);
  };

  return (
    <div>
      <input type="number" value={state} />
      <button onClick={(e) => increment()}>Increment</button>
    </div>
  );
};
