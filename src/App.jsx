
import './App.css'
import { Home } from './Pages/Home'
import { HeroText } from './Components/Home/HeroText'


function App() {

  return (
    <>
      <Home className='bg-zinc-900/95' heroData={HeroText} />
    </>
  )
}

export default App
