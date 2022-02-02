import React, { useState } from 'react';
import './App.css';
import { Button } from '@material-ui/core/';
// import Stack from '@mui/material/Stack';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete'


function App() {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1)
  }
  const decrement = () => {
    if (num > 0) {
      setNum(num - 1)
    } else {
      alert("Limit Reached")
      setNum(0)
    }
  }


  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1>{num}</h1>
          <div className='btn_div'>
            <Button onClick={increment} className='btn_green'><AddIcon /></Button>
            <Button onClick={decrement} className='btn_red'><DeleteIcon /></Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
