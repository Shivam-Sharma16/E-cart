import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Product from '../pages/Product'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Createproduct from './../pages/Createproduct';
import DetailsProduct from '../pages/admin/DetailsProduct'
import Cart from '../pages/Cart'
import PageNotFound from '../PageNotFound'
import Unauth from './Unauth'
import Setting from '../pages/setting'
import About from '../pages/About'
import Auth from './Auth';

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/products' element={<Product />} />

      <Route path='/products/:id' element={
       <Auth >
       <DetailsProduct />
       </Auth>
        } />
      <Route path='/login' element={
      <Unauth >
        <Login />
       </Unauth>
        } />
      <Route path='/register' element={
       <Unauth >
       <Register />
        </Unauth>
        } />
      <Route path='/admin/create-product' element={
        <Auth>
        <Createproduct />
        </Auth>
      } />

      <Route path='/cart' element={
        <Auth>
         <Cart />
          </Auth>} />

     <Route path='/setting' element={
    <Auth>
      <Setting />
      </Auth>
    
    } />


     <Route path='/about' element={<About />} />     

 <Route path='*' element={<PageNotFound />} />
    </Routes>
  )
}

export default Mainroutes
