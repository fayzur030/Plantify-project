import { useState } from 'react'
import './App.css'
import Navbar from './components/common/Navbar'
import Banner from './components/home/Banner'
import PlantList from './components/plant/PlantList'
import type { Plants } from './types/Plants'
import { ToastContainer } from 'react-toastify'

function App() {
  const [cart, setCart] = useState<Plants[]>([])
  return (
    <>
      <div>
        <Navbar cart={cart} setCart={setCart} />
      </div>
      {/* Tost */}
      <ToastContainer />
      <main>
        <Banner />
        <PlantList cart={cart} setCart={setCart} />
      </main>
    </>
  )
}

export default App
