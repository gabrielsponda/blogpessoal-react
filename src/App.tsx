import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Cadastro from './pages/cadastro/Cadastro'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="flex-grow mt-16 min-h-[80vh] bg-violet-600" >
          <Routes>
            <Route path="/" element={<></>} />
            <Route path="/home" element={<Home />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
