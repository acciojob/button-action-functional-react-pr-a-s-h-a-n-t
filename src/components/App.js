import React, {Component, useState} from "react";
import "./../styles/App.css";

  
import "./styles.css";

export default function App() {
  let para =   `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
  
  const[display, setdisplay] = React.useState(false)
  function renderComponent(){
    return( setdisplay(true)
    )

  }

  let show;
  if(display){
    show = para;
  }
  else{
    show = null;
  }
  return (
    <div className="App">
      <button id="click" onClick={ renderComponent }>Submit</button>
      <p id="para"  >{ show }</p>
    </div>
  );
}

