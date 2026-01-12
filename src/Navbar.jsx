import React from 'react'

const Navbar = ({name,city,email}) => {
  return (
    <div className='w-100 h-100 border-2 border-amber-500 italic text-center gap-0.5' >
        {/* <h1 className=''>my name is {name} and i am belong to {city}</h1> */}
<h1 >name-{name}</h1>
<h1>city-{city}</h1>
<h2>email-{email}</h2> 



        </div>



  )
}

export default Navbar