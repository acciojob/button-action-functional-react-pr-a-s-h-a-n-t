import React, {  useState} from "react";
import "./../styles/App.css";

  
 

export default function App() {
     
  
  const[display, setdisplay] =  useState(false)
   

   

   
  return (
    <div className="App">
      <button id="click" onClick={ () => {
        setdisplay(true);
      } }>Add</button>
      {display && <p id="para"  >Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy </p>}
    </div>
  );
}

