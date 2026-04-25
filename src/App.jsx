import React from 'react'
import { Routes,Route} from 'react-router-dom'

import Home from './pages/Home'
import Products from './pages/Products'
import ProductDescription from './pages/ProductDescription'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import Contact from './pages/Contact'
import About from './pages/About'
import Checkout from './pages/Checkout'

import ProductManagement from './admin/ProductManagement'
import UserManagement from './admin/UserManagement'
import Dashboard from './admin/Dashboard'
import Profile from './pages/Profile'
import PageNotFound from './pages/PageNotFound'
import Header from './components/Header'

const App = () => {
  return (
    <>
    <Header/>
      <Routes>

        {/* auth routes */}
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/profile" element={<Profile/>} />

        {/* pubic routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/product/:id" element={<ProductDescription/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/checkout" element={<Checkout/>} />

        {/* admin routes */}
        <Route path="/product-management" element={<ProductManagement/>} />
        <Route path="/user-management" element={<UserManagement/>} />
        <Route path="/dashboard" element={<Dashboard/>} />



        <Route path="*" element={<PageNotFound/>} />

      </Routes>
    </>
  )
}

export default App