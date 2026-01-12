import React, { useState } from 'react'
const Nhook = () => {

   let  [up,setup]=useState(false)
   let [ok,setok]=useState(false)



  return (
    <>
    
    <h1 style={{backgroundColor: up?"blue":"violet", color: up?"violet":"blue"}}> { up?"UP":"DOWN" } </h1>
    <button style={{backgroundColor: up?"orange":"red"}} onClick={()=>{setup(!up)}}>{ up?"yes":"no"}</button> <br />


 { ok && (<h2>GOOD</h2>) } <br />



    <button onClick={()=>{setok(!ok)}}>{ ok?"hide":"show"}</button>



    </>
  )
}

export default Nhook