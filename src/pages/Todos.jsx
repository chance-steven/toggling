import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Todos = () => {
    const [marks,setMarks] =useState(40)
    useEffect(()=>{
     console.log(marks)
    },[marks])
  return (
    <div>
    <p>your marks is {marks}</p>
        <button onClick={()=>setMarks(prev=>prev+25)}>increment</button>
    </div>
  )
}

export default Todos