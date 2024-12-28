import Counter from './components/Counter'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import ProfileCard from './components/ProfileCard'
import ThemeToggle from './components/ThemeToggle'
import WeatherCard from './components/WeatherCard'
import Todos from './pages/Todos'

const App = () => {
        
        
  return (
    <div >
     <Navbar />
      <ThemeToggle />
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 mx-4'>
          <ProfileCard  name="Steven" age="25" bio="I was born in Congo,grew-up in East of Congo actualy in masisi and now I live in Rwanda "/>
           <ProfileCard  name="Michel" age="28" bio="I was born in Africa,grew-up in East-Africa actualy in congo and now I live in Toronto "/> 
           <ProfileCard name="Chance" age="30" bio="I was born in Congo,grew-up in East of angland actualy in masisi and now I live in Rondon "/> 
           </div>
           <Counter />
           
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 '>
           <WeatherCard temperature="25 c" city="Kigali" condition="suny" />
           <WeatherCard temperature="20 c" city="Musanze" condition="rain"/>
           <WeatherCard temperature="18 c" city=" Rwanda" condition="We will have much rain evry where in the country around 15h00 PM"/>
           </div>
             <div className='flex flex-col-3 gap-4 bg-gray-600 p-2'>
             <ProductCard product="avocado" price="200" image="src/assets/avocado.png" />
            <ProductCard product="papaya" price="100" image="src/assets/papaya.png" />
            <ProductCard product="orange" price="300" image="src/assets/orange.png" />

             </div>
            <Todos />
    </div>
  )
}

export default App