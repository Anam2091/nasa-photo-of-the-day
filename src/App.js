import React from "react";
import "./App.css";
import { useState } from "react";
import axios from 'axios';
import {useEffect} from "react";
import Data from "./Data";

function App() {
  const [nasaPic, setNasaPic] = useState({})
  useEffect(() => {
    
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=cix4w3aYZywDq8a0db16vbZj4edacAJbbUMtjcvx")
      // Which we then set to state
      .then(res => {
        setNasaPic(res.data)
        console.log(res.data)}
      )
      // Always include error handling
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      <Data propy={nasaPic} />
    </div>
  );
}

export default App;
