import React from 'react'

async function page({params}:{
    params:Promise <{slug : string[]}>
}) {
    const {slug}=await params
     if (slug.length ==2){
        return <h3>viewing docs for feature {slug[0]}, and concept {slug[1]} </h3>
     }else if(slug.length ==1){
        return <h3>viewing docs for feature {slug[0]} </h3>
     }  
  return (
      <h1>docs home page </h1>
  )
}

export default page
