 import React from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route ,Routes} from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Home from './pages/Home/Home'
 const App = () => {
   return (
     <div className='app'>
      <NavBar/>
       <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
       </Routes>
     </div>
   )
 }
 
 export default App
 