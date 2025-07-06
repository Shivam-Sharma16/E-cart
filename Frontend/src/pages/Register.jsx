import React from 'react'
import {useForm} from "react-hook-form"
import {nanoid} from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { asyncRegisterUser } from '../store/actions/userAction'

const Register = () => {
const {register,handleSubmit,reset}=useForm()

const disptach=useDispatch()
const navigate=useNavigate()


const registerHandler=(user)=>{
user.id=nanoid()
user.isAdmin=false

disptach(asyncRegisterUser(user))
reset()
navigate('/login')


}

  return (
    <div className=''>
        <div className='flex flex-col justify-center items-center relative'>
            <i className="text-6xl border-[#00264D] rounded-[50%] p-[1rem] bg-[#00264D] text-white absolute top-[15%]
            ri-user-fill"></i>
            <form onSubmit={handleSubmit(registerHandler)} className='h-[65vh] flex flex-col rounded-2xl items-center justify-center gap-[1rem] bg-white/40 w-fit mt-[10rem] p-[2rem]' >
               
               
                 <div><i className="bg-[#00264D] text-4xl text-white outline-0 font-thin px-[0.5rem] py-[0.5rem]
                 ri-home-fill"></i>
                <input className='bg-[#385273] text-3xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
               {...register("name")} type="text" placeholder='Full Name' /></div>
               
               
               
                <div><i className="bg-[#00264D] text-4xl text-white outline-0 font-thin px-[0.5rem] py-[0.5rem]
                 ri-user-fill"></i>
                <input className='bg-[#385273] text-3xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
               {...register("email")} type="email" placeholder='Email Id' /></div>



               <div><i className="bg-[#00264D] text-4xl text-white outline-0 font-thin px-[0.5rem] py-[0.5rem]
                 ri-phone-fill"></i>
                <input className='bg-[#385273] text-3xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
               {...register("mobile")} type="phone" placeholder='Mobile No.' /></div>



                <div><i className="bg-[#00264D] text-4xl text-white outline-0 font-thin px-[0.5rem] py-[0.5rem]
                ri-lock-fill"></i>
                <input {...register('password')}
                className='bg-[#385273] text-3xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]' type="password" placeholder='Password' /></div>
                <button className='text-2xl border-0 w-full py-1 outline-0 bg-blue-500 text-white active:scale-99'>SIGN UP</button>
<p>Already have an Account? <Link className="text-blue-800" to={"/login"}>log in Now</Link></p>
            </form>
        </div>
      
    </div>
  )
}

export default Register

