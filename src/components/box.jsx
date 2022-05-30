import React, { useEffect, useState } from 'react'
import Style from './box.module.css';
 
let p=2;
let temp=[["","",""],["","",""],["","",""]];
const Box = () => {
  let [point1,setpoint1]=useState(0);
  let [point2,setpoint2]=useState(0);
  let user1=localStorage.getItem("user1");
  let user2=localStorage.getItem("user2");
  let [arr,setarr]=useState(temp)
  const [inputval,setinputval]=useState("");
  const valuechange =(g)=>{
    if(p%2==0){
      if(g=="1" && temp[0][0]!="X" && temp[0][0]!="O"){temp[0][0]="X";setinputval("X");setarr(temp);p++}
      if(g=="2" && temp[0][1]!="X" && temp[0][1]!="O"){temp[0][1]="X";setinputval("X");setarr(temp);p++}
      if(g=="3" && temp[0][2]!="X" && temp[0][2]!="O"){temp[0][2]="X";setinputval("X");setarr(temp);p++}
      if(g=="4" && temp[1][0]!="X" && temp[1][0]!="O"){temp[1][0]="X";setinputval("X");setarr(temp);p++}
      if(g=="5" && temp[1][1]!="X" && temp[1][1]!="O"){temp[1][1]="X";setinputval("X");setarr(temp);p++}
      if(g=="6" && temp[1][2]!="X" && temp[1][2]!="O"){temp[1][2]="X";setinputval("X");setarr(temp);p++}
      if(g=="7" && temp[2][0]!="X" && temp[2][0]!="O"){temp[2][0]="X";setinputval("X");setarr(temp);p++}
      if(g=="8" && temp[2][1]!="X" && temp[2][1]!="O"){temp[2][1]="X";setinputval("X");setarr(temp);p++}
      if(g=="9" && temp[2][2]!="X" && temp[2][2]!="O"){temp[2][2]="X";setinputval("X");setarr(temp);p++} 
     }
     else
     {
       if(g=="1" && temp[0][0]!="X" && temp[0][0]!="O"){temp[0][0]="O";setinputval("O");setarr(temp);p++}
       if(g=="2" && temp[0][1]!="X" && temp[0][1]!="O"){temp[0][1]="O";setinputval("O");setarr(temp);p++}
       if(g=="3" && temp[0][2]!="X" && temp[0][2]!="O"){temp[0][2]="O";setinputval("O");setarr(temp);p++}
       if(g=="4" && temp[1][0]!="X" && temp[1][0]!="O"){temp[1][0]="O";setinputval("O");setarr(temp);p++}
       if(g=="5" && temp[1][1]!="X" && temp[1][1]!="O"){temp[1][1]="O";setinputval("O");setarr(temp);p++}
       if(g=="6" && temp[1][2]!="X" && temp[1][2]!="O"){temp[1][2]="O";setinputval("O");setarr(temp);p++}
       if(g=="7" && temp[2][0]!="X" && temp[2][0]!="O"){temp[2][0]="O";setinputval("O");setarr(temp);p++}
       if(g=="8" && temp[2][1]!="X" && temp[2][1]!="O"){temp[2][1]="O";setinputval("O");setarr(temp);p++}
       if(g=="9" && temp[2][2]!="X" && temp[2][2]!="O"){temp[2][2]="O";setinputval("O");setarr(temp);p++}       
     }
  }
  useEffect(()=>{
    let diagx1=0;
    let diago1=0;
    let diagx2=0;
    let diago2=0;
    let final=0;
      for(let i=0;i<3;i++){
        let countxv=0;let countxh=0;
        let countov=0;let countoh=0;
        for(let j=0;j<3;j++){
          if(arr[j][i]=="X")
          countxv++;
          if(arr[j][i]=="O")
          countov++;
          if(arr[i][j]=="X")
          countxh++;
          if(arr[i][j]=="O")
          countoh++;
          if(i+j==2 && arr[i][j]=="X")
            diagx1++;
          if(i+j==2 && arr[i][j]=="O")
            diago1++;
          if(i==j && arr[i][j]=="X" )
           diagx2++;
           if(i==j && arr[i][j]=="O")
           diago2++;
           if(arr[i][j]=="")
           final++;
        }
        console.log(final)
        if(countxv==3 || countxh==3 || diagx1==3 || diagx2==3 ){
          alert(`${user1} is Winner`);
          setarr(temp=[["","",""],["","",""],["","",""]]);
          setpoint1((e)=>e+1);
        }
       
        if(countov==3 || countoh==3 || diago1==3 || diago2==3){
          alert(`${user2} is Winner`);
          setarr(temp=[["","",""],["","",""],["","",""]]);
          setpoint2((e)=>e+1);
        }
      }
      if(final==0){
        alert(`Match is Draw. Match Reset`);
        setarr(temp=[["","",""],["","",""],["","",""]]);
      }
  },[inputval])
   
  
  return (
    <div className={Style.container} >
       <h1>Player 1 :- <b>{user1}</b> - 'X' </h1>
       <h1>Player 2 :-  <b>{user2}</b> - 'O'</h1> 
      <div className={Style.checkbox}>
        <div onClick={()=>valuechange("1")}>{arr[0][0]}</div><div onClick={()=>valuechange("2")}>{arr[0][1]}</div><div onClick={()=>valuechange("3")}>{arr[0][2]}</div>
        <div onClick={()=>valuechange("4")}>{arr[1][0]}</div><div onClick={()=>valuechange("5")}>{arr[1][1]}</div><div onClick={()=>valuechange("6")}>{arr[1][2]}</div>
        <div onClick={()=>valuechange("7")}>{arr[2][0]}</div><div onClick={()=>valuechange("8")}>{arr[2][1]}</div><div onClick={()=>valuechange("9")}>{arr[2][2]}</div>
      </div>
      <div className={Style.pointbox}>
      <h1>Total Point of {user1} :- {point1}</h1>
      <h1>Total Point of {user2} :- {point2}</h1>
      </div>
    </div>
  )
}

export default Box;