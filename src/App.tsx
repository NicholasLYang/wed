import React, { useEffect, useState } from "react";
import "./App.css";
import { parse } from "./parser";
import { hexy } from "hexy";

function App() {
  const [inputText, setInputText] = useState("");
  const [code, setCode] = useState("");
  useEffect(() => {
    fetch("http://localhost:2000/")
      .then((res) => res.json())
      .then((body) => {
        setCode(body.code);
      });
  }, []);
  return (
    <div className="App">
      <p>{code}</p>
      <form
        onSubmit={() => {
          setCode(inputText);
        }}
      >
        <input
          value={inputText}
          onChange={(e) => setInputText(hexy(e.currentTarget.value))}
        />
        <button type="submit"> Submit </button>
      </form>
    </div>
  );
}

export default App;
