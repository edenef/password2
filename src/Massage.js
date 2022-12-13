import { useEffect,useState } from "react";

function Massage(props) {
  
  const {input} = props;
  const [string,setString]=useState("empty")

  useEffect(()=>{
    if(input.length <=2){
      setString("Short password")
    }
    else if(input.length <=6){
      setString("Medium password")
    }
    else if(input.length >7){
      setString("Strong password")
    }
  },[setString,input])

   
  return (
    <div >
    <h3> {string} </h3>
    </div>
  );
}
export default Massage;