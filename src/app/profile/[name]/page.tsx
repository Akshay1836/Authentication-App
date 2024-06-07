import React from 'react'

export default function page({params}:any) {
  return (
    <div className='flex justify-center items-center bg-orange-500'>
        <p className='text-white w-4'>{params.name}</p>
    </div>
  )
}

