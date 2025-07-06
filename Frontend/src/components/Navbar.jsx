import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center text-3xl font-thin gap-[2rem]'>
        <NavLink className={(e)=>e.isActive ? "text-red-800" : ""} to={"/"}>Home</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-800" : ""} to={"/products"}>Product</NavLink>
        <NavLink className={(e)=>e.isActive ? "text-red-800" : ""} to={"/login"}>Login</NavLink>

      
    </div>
  )
}

export default Navbar
