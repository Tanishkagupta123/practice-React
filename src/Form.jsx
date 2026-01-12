
import React, { useState } from "react";



const Form = () => {

     let [ myname, setmyname ]=  useState('')
     let [ myage, setmyage ]=  useState('')

    
     
    let handlechange=(e)=>{
        console.log(e.target.value);
        setmyname(e.target.value);


        // setmyage(e.target.value);  
    
    }

        let handle=(e)=>{
        console.log(e.target.value);
        // setmyname(e.target.value);


        setmyage(e.target.value);  
    
    }

  return (

    <>
   
    <h1>Form Handeling</h1>

  Enter Your Name:  <input type="text" name="myname" onChange={handlechange}/><br /><br />
   Enter Your Age:  <input type="text" name="age" onChange={handle}/><br /><br />
   Enter Your City:  <input type="text" name="city" onChange={(e)=>{setmycity(city)}}/><br /><br />

{/* 
  <h1>{myname}</h1>
  <h1>{myage}</h1> */}

  <h1>Hello my name is {myname} and my age is {myage}</h1>
  
    




     </>
  )
}

export default Form