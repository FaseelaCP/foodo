
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>

        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/placeorder' element={<PlaceOrder/>} ></Route>
      </Routes>
      
      
    </div>
    <Footer/>
    </>

  )
}

export default App
