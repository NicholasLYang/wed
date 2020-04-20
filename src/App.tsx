import React, {useState} from 'react';
import './App.css';
import {parse} from "./parser";

function App() {
  const [inputText, setInputText] = useState("");
  const [code, setCode] = useState("");
  return (
    <div className="App">
        <p>
          {code}
        </p>
      <form onSubmit={() => {
        setCode(inputText);
      }}>
        <input value={inputText} onChange={(e) => setInputText(e.currentTarget.value)} />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default App;
