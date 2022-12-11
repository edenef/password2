
import './App.css';
import Massage from './Massage';
import { useState,useEffect } from 'react';



function App() {
const [input,setInput]=useState() 
const [password,setPassword]=useState(false)

useEffect(()=>{
  if(password){
    setPassword(false)
    password(false)
  }
},[handelInput])

function handelInput(input){
  console.log(input)
  setInput(Number(input.target.value)) 
}

return (
    <div className="App" >
    <h1> New App</h1>
    <p><b> Please enter a password :</b></p>
    <input type='number' onChange={handelInput}/>
    <button>Submit</button>
    <Massage input={input}/>
    </div>

  );
}

export default App;
