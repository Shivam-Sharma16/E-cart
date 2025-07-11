import React from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const { user } = useSelector((state) => state.userReducer);
  console.log(user);
  return (
    <div className='flex items-center justify-center text-3xl font-thin gap-[2rem]'>
      <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to={"/"}>Home</NavLink>
      <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to={"/products"}>Product</NavLink>
      {user ? (
        <>
          <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to={"/cart"}>Cart</NavLink>
          <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to={"/setting"}> Settings</NavLink>
          {
            user?.isAdmin && (
              <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to={"/admin/create-product"}>Create Product</NavLink>
            )
          }
        </>
      ) : (
        <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to={"/login"}>Login</NavLink>
      )}
      <NavLink className={(e) => e.isActive ? "text-red-800" : ""} to={"/about"}>About</NavLink>
    </div>
  )
}

export default Navbar
