"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

function notFound() {
    const pathname=usePathname()
    const productId=pathname.split("/")[2]
    const reviewId=pathname.split("/")[4]
  return (
    <div>
      <h2 className='text-red-500'>review{reviewId} Not found fro product {productId} </h2>

    </div>
  )
}

export default notFound
