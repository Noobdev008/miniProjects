import React, { useState } from "react";
import './App.css'


const App = () => {

  let newTime = new Date().toLocaleTimeString();
  let newDate = new Date().toLocaleDateString();

  const [ctime, setCtime] = useState(newTime);
  const [cdate, setCdate] = useState(newDate);

  const UpdateTime = () => {
    let NewTime = new Date().toLocaleTimeString();
    let NewDate = new Date().toLocaleDateString();
    // newTime;
    setCtime(NewTime);
    setCdate(NewDate);
  }
  return (
    <>
      <h1 className="App">{cdate}</h1>
      <h1 className="App">{ctime}</h1>
      <button className="App" onClick={UpdateTime} >Refresh Me</button>
    </>
  )
}

export default App;