import React, { useState } from "react";

function App() {
  const [headingtext, setheadingtext] = useState("Hello");

  function handleClick() {
    setheadingtext("Registered");
  }

  return (
    <div className="container">
      <h1>{headingtext}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}>Submit</button>
    </div>
  );
}

export default App;
