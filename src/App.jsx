
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import PriceOptions from './Components/PriceOptions/PriceOptions'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className='text-4xl font-bold'>Stay Fit </h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
