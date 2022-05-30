import { useState } from 'react';
import './App.css';
import Box from './components/box';
import {Start} from './components/start';
import PositionExample from './components/toast';


function App() {
  const [check,setcheck]=useState(true);
 
  const checking=()=>{
    let user1=localStorage.getItem("user1") ;
    let user2=localStorage.getItem("user2") ;
    if(user1===""||user2===""){
       setcheck(true);
       return true;
    }       
    else
      {setcheck(false)
      return false};        
  }
  
  return (
    <div className="App">
      {check?<div className='container'><Start/><PositionExample  value={checking} checkval={check}/></div>
      :<div className='container'><Box/></div>}
    </div>
  );
}



export default App;
