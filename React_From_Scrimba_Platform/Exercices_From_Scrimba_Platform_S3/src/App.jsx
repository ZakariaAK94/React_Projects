import './App.css'
import Contact from './Component/Contact'
import mrWhiskerson from "./Component/images/mr-whiskerson.png"
import fluffykins from "./Component/images/fluffykins.png"
import felix from "./Component/images/felix.png"
import pumpkin from "./Component/images/pumpkin.png"

export default function App() {

  return (
    <div className='contacts'>
      <Contact 
                img={mrWhiskerson}
                name="Mr. Whiskerson"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
      />
      <Contact 
            img={fluffykins}
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com" 
      />
      <Contact
            img={felix}
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"  
      />
      <Contact 
            img={pumpkin}
            name="Pumpkins"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com" 
      />
    </div>
      
  )
}
