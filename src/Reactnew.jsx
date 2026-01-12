import React from 'react'

const Reactnew = ({img, dis, price}) => {
  return (
    <>

<div id='okk'>

  <img src={img} height="100px" width="100px" />

  <h1>dis{dis}</h1>
  <h2>price{price}</h2>

   </div>
    </>
  )
}

export default Reactnew