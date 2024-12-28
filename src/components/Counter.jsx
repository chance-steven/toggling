import { useState } from "react"

const Counter = () => {
   const[count,setCount] = useState(4)
  return (
<>
<div>
            <h2 className="text-green-700 text-center">Let's count:{count}</h2>
            <div className="  flex gap-3 justify-center">
            <button className=" rounded-md bg-sky-900 px-4 py-1.5 mt-2 " onClick={()=>setCount(prev=> prev+2)}>Increse</button>
            <button className=" rounded-md bg-sky-900 px-4 py-1.5 mt-2  " onClick={()=>setCount(prev=>prev-1)}>Decrese</button>
            <button className=" rounded-md bg-sky-900 px-4 py-1.5 mt-2 " onClick={()=>setCount(0)}>Reset</button>
            </div>
        

    </div>
</>

  )
}

export default Counter