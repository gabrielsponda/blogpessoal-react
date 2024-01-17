import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'

function App() {

  return (
    <>
      <Navbar />
      <div className="flex-grow mt-16 min-h-[80vh] bg-violet-600" >
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App
