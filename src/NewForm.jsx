import React, { useState } from 'react' 

const NewForm = () => {

    //   let [myname,setmyname]=useState('')
    //   let [city,setcity]=useState('')
    //   let [state,setstate]=useState('')

    let [form,setform] =useState({
        myname:'',
        city:'',
        state:''
    })

    let handlechange=(e)=>{
        setform({...form, [e.target.name]:e.target.value})
    }

    // let handle=(e)=>{
    //     console.log(e.target.value);
    //     setcity(e.target.value)
    // }

  return (
    <>
      <h1>Form Handleing</h1>

      Enetr name:
      <input type="text" name='myname' value={form.myname} onChange={handlechange} />
      <br /><br />

      Enter city:
      <input type="text" name='city' value={form.city} onChange={handlechange} />
      <br /><br /><br />

      Enter state:
      <input type="text" name='state' value={form.state} onChange={handlechange} />
      <br /><br />

      my name is <h1>{form.myname}</h1>
      and my age is <h1>{form.city}</h1>
      and my state is <h1>{form.state}</h1>
    </>
  )
}

export default NewForm
