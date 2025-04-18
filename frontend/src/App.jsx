import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Wishlist from './component/Wishlist'
import WishlistTable from './component/WishlistTable'
import Updatewish from './component/Updatewish'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WishlistTable/>}></Route>
          <Route path='/wish' element={<Wishlist/>}></Route>
          <Route path='/update/:id' element={<Updatewish/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
