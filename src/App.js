import Component from "./Component";
import { useState } from "react";


function App() {

  const [state, setState] = useState(false);
  function handleClick() {
    setState(!state);
  }

  return (<div>
    <h1 onClick={handleClick}>Show / Hide</h1>
    {state && <Component />}
  </div>

  );
}

export default App;
