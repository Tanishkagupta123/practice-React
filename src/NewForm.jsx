import React, { useState } from 'react' 

const NewForm = () => {

      let [myname,setmyname]=useState('')
      let [city,setcity]=useState('')


    let handlechange=(e)=>{

        console.log(e.target.value);
        setmyname(e.target.value)
        
    }

    let handle=(e)=>{

        console.log(e.target.value);
        setcity(e.target.value)


    }

  return (

    <>
    <h1>Form Handleing</h1>

    Enetr name:   <input type="text" onChange={handlechange} /><br /><br />
    Enter city: <input type="text" onChange={handle} /><br /><br /><br />





   my name is  <h1>{myname}</h1> and
  my age is  <h1>{city}</h1>








    </>
  )
}

export default NewForm