import React, { useState } from 'react'

function Todoinput() {
    const[inputtext,setinputtext] = useState('');
  return (
    <div className='input container'>
        < input type='text' 
        className='input box todo'
         placeholder='enter your todo'
         value={inputtext}
         onChange={e=>{
            setinputtext(e.target.value)
         }}
        />
        <button className='Add button'>+</button>
        <div></div>
        
       
    </div>
  )
}
export default Todoinput
