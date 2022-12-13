import { useState } from "react";

function Massage(props) {
  
  const {input} = props;
  const[string,setString] = useState();


  function cheString(){
    if(input.length <=2){
      setString("week")
    }
    if(2<input.length<=6){
      setString("medium")
    }
    if(input.length >6){
      setString("strong")
    }
  }
  return (
    <div className="App">
      <h3></h3>
    <h3><button onClick={cheString} >click</button> </h3>
    <p>{string}</p>
    </div>
  );
}
export default Massage;