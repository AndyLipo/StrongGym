
import './App.css'
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'


function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobrenosotros" element={<About />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
