import React, { useEffect, useState } from 'react'
import Style from './start.module.css'
import { Input } from '@chakra-ui/react';
let i=-1;
const Start = () => {
      const temp=["L","e","t","'s"," ","P","l","a","y"," ","T","i","c"," ","T","a","c"," ","T","o","e"];
      const [user1,setuser1]=useState("");
      const [user2,setuser2]=useState("");
      const [heading,setheading]=useState("");
      useEffect(()=>localStorage.setItem("user1",user1),[user1]);
      useEffect(()=>localStorage.setItem("user2",user2),[user2]);
      useEffect(()=>{
        setTimeout(()=>{setheading((e)=>{if(i==20){setheading("");i=-2};i++;return e+temp[i]})},100);
      },[i])
       
  return (
    <div className={Style.container}>
        <><h2>{heading}</h2></><br/>
        <label>Player 1 :</label>
        <Input variant='filled'  type="text" placeholder="Enter Player 1 Name" onChange={(e)=>{setuser1(e.target.value)}}/><br/><br/>
        <label>Player 2 :</label>
        <Input  variant='filled' type="text" placeholder="Enter Player 2 Name" onChange={(e)=>{setuser2(e.target.value);localStorage.setItem("user2",user2)}}/>
   </div>
  )
}

export {Start};