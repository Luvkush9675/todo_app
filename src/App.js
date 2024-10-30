import React, { useState } from 'react'
import './App.css'
import Todoinput from './components/todoinput'

function App() {
  const[list,setlist]=useState([]);
  const addlist=(inputText)=>{
    setlist([...list,inputText]);
  }
  return (
    <div className="main container">
      <div className='center container'>
        <Todoinput addlist={addlist}/>
      </div>
      
    </div>
  );
}

export default App;
