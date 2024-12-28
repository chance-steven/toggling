
const WeatherCard = ({temperature,city,condition}) => {
  return (
    <div className={` text-white px-4 py-1.5 border-2 border-black m-4 ${
     condition === "suny" 
      ? "bg-sky-700"
     :condition ==="rain"
      ? "bg-blue-500"
     :"bg-red-500"
    }`}>
Good moning rwandan people 
this is how metheo rwanda 
predict the wheather of to day
In: {city} we have {temperature}  {condition}
    </div>
  )
}

export default WeatherCard