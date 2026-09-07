import './App.css'
import Navbar from './components/common/Navbar'
import Banner from './components/home/Banner'
import PlantList from './components/plant/PlantList'

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main>
        <Banner />
        <PlantList />
      </main>
    </>
  )
}

export default App
