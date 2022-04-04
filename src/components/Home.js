

import React from 'react'
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


toast.configure()
export default function Home() {

    const notify = () =>{

        toast("Welcome Home",{position:toast.POSITION.TOP_CENTER})
    
     }
      ;
     const  showInfo = () => {
        toast.info("Info Notification");
      };

     const  showError = () => {
        toast.error("ERROR Notification");
      };
    
      
  return (
    <div>
    
      <button  onClick={notify}>  click me</button>
      <button onClick={showInfo}>Info </button>
      <button onClick={showError}>Error </button>
    </div>
  )
}
