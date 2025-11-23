import React from 'react'

async function page({params}: {
    params:Promise< {productId: string}>  
}) {
    const productID=(await params).productId
  return (
           <h3>detailes about product {productID}</h3> 
  )
}

export default page
