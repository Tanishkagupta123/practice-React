import React from 'react'
import { useState } from 'react'

const Hoookkkkkk = () => {

    let [ count, setCount ]= useState(0)
    console.log(count);

    // let count=0
    let inc=()=>{
      
          setCount(count+1) 
    }

    let dec=()=>{
      
          setCount(count-1) 
    }
    let res=()=>{
      
          setCount(count=0) 
    }

  return (     
    <>

    <h1>{count}</h1>


    <button onClick={inc}>increment</button><br /><br />
    <button onClick={dec} disabled={count==0} >descrement</button><br /><br />
    <button onClick={res}>reset</button>

    </>
  )
}

export default Hoookkkkkk