import React, { useState } from 'react';
const App = () => {
  return (
    <div class="geotabPageHeader">
      <h1 class="geotabPageName">
        Hafiz Qaiser<span class="subdued">Add working with React JS</span>
      </h1>
      <div class="pageNameSecondary">
        <h3 class="geotabSecondaryTitle">and additional information</h3>
      </div>
      <Example />
    </div>
  );
};

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
