
import './App.css';
import Massage from './Massage';
import {useState,useEffect} from 'react';

function App() {

  const [input,setInput]=useState(0);
  const [password,setpassword]=useState(true);

  function handelInput(event){
    setInput (event.target.value)
  }  
  useEffect(()=>{
    if(input.length>2){
      setpassword(false)
    }
    else{setpassword(true)}
  },[setpassword,input])

  return (
    <div className="App" >
    <h1> New App</h1>
    <p><b> Please enter password :</b></p>
    <input onChange={handelInput}/>
    <button disabled={password}>Submit</button>
    <Massage input={input} />
    </div>

  );
}

export default App;



