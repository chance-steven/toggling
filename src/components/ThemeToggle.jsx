import { useState } from "react"

const ThemeToggle = () => {
 const [isDarkTheme,setIsDarkTheme]   = useState(true)
  return (
    <div>
        <button className="text-white rounded-md bg-sky-900 mt-10 ml-4 mb-2" onClick={()=>setIsDarkTheme(prev=>!prev)
        
        }>Change Theme</button>
        <div className={`bg-green-600 text-white px-10 w-2/4 mx-4 ${
        isDarkTheme? "dark":"light"}`}>
            ghfghfdsghfhggggggggggggvbhsfdgyhryggfbv
            bfdhsgfdjhgfjgfdhsakrtytrkqFDAZSF
            FHJGFDSHKDSMFHGSKJHGFSDHGMXBXCNGF
            ckgfdjgfdbxcfnbvjhxgvfdsgdsvbcfcs
        </div>
    </div>
  )
}

export default ThemeToggle