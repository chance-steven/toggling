import { useState } from "react"

const Navbar = () => {
   const [isResize,setIsResize] = useState(true)
  return (
    <div 
    className="flex justify-around bg-green-300 mx-4">
        <h1>Michou<span className="text-sky-600">Phar</span></h1>
        <ul className="flex gap-4">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Contact</a></li>
        </ul>
        {/* <button>Toggle Menu</button> */}
    </div>
  )
}

export default Navbar