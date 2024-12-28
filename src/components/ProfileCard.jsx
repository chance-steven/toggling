
const ProfileCard = ({name,age,bio}) => {
  return (
    
    <div className={` px-4 py-2 border-2 border-black ${
    age ==="25"
    ? "bg-sky-400"
    :age ==="30"
    ? "bg-green-700"
    : "bg-red-300"
    }`}>  My name is {name} 
    <br></br>I'm {age} years old <br></br> 
    {bio}</div>
    
  )
}

export default ProfileCard