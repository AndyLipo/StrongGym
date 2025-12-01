import './App.css'
import { Home } from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import { About } from './Pages/About'
import { Contact } from './Pages/Contact'
import ScrollToTop from './Components/Common/ScrollToTop'


function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SobreNosotros" element={<About />} />
        <Route path="/Contacto" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App