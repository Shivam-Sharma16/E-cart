import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {

  const navigate = useNavigate()
  return (
    <div>
      <div className='w-full relative bg-gray-300 h-screen p-[2rem] my-[2rem] pt-[7rem]'>
        <motion.h5
          initial={{
            opacity: 0,
            x: 100
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{

            duration: 1
          }}
          className='text-2xl pl-[1rem]'>Beats solo</motion.h5>
        <h4 className='text-7xl font-bold pt-[1rem] pl-[1rem]'>Wireless</h4>
        <motion.h1
          initial={{
            opacity: 0,

          }}
          animate={{
            opacity: 1,

          }}
          transition={{
            delay: 1,
            duration: 1
          }}
          className='text-[14rem] text-white mt-[-2rem]'>HEADPHONE</motion.h1
        >
        <div className='flex items-center justify-between'>
          <button className='bg-red-500 px-[1rem] py-[0.5rem] rounded ml-[1rem] active:scale-99 text-white'>Show by Category</button>
          <div className='pr-[4rem] w-1/4 h-[40vh] '>
            <h4 className='text-right text-2xl uppercase font-thin'>description</h4>
            <p className='text-right text-md uppercase font-thin '>
              Sleek wireless headphones with deep bass, noise isolation, long battery life, and Bluetooth connectivity—perfect for music, calls, and everyday use.
            </p>
          </div>
        </div>
        <motion.img
          initial={{
            scale: 0
          }}
          animate={{
            scale: 1
          }}
          transition={{

            duration: 1
          }}
          className="w-[40%] absolute top-[20%] left-[30%] " src="../../public/Headphone-PNG-Photo-Image.png" alt="" />
      </div>

      <div className=' h-screen w-full flex flex-col gap-[2rem] mt-[6rem] mb-[2rem] '>
        <h1 className='text-5xl font-thin pt-[2rem] pl-[0.5rem] text-gray-700'>Featured Products</h1>
        <div className='flex items-center justify-between gap-[2rem]'>
          <div className='w-1/4 h-[40vh] rounded-2xl bg-gray-300'>
            <img onClick={() => navigate('/products')} className='cursor-pointer w-full h-[40vh] overflow-hidden object-cover rounded-2xl' src="https://images.unsplash.com/photo-1600861195091-690c92f1d2cc?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className='w-1/4 h-[40vh] rounded-2xl bg-pink-300'>
            <img onClick={() => navigate('/products')} className='cursor-pointer w-full h-[40vh] overflow-hidden object-cover rounded-2xl' src=" https://images.unsplash.com/photo-1633281651825-5f3c9b55f6a6?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>
          <div className='w-1/2 h-[40vh] rounded-2xl bg-red-400'>
            <img onClick={() => navigate('/products')} className='cursor-pointer w-full h-[40vh] overflow-hidden object-cover rounded-2xl' src="https://plus.unsplash.com/premium_photo-1669652639356-f5cb1a086976?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
        </div>
        <div className='flex items-center justify-between gap-[2rem]'>
          <div className='w-1/2 h-[40vh] rounded-2xl bg-red-400'>
            <img onClick={() => navigate('/products')} className='cursor-pointer w-full h-[40vh] overflow-hidden object-cover rounded-2xl' src="https://plus.unsplash.com/premium_photo-1682435566673-cedb75cd7459?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className='w-1/4 h-[40vh] rounded-2xl bg-gray-300'>
            <img onClick={() => navigate('/products')} className='cursor-pointer w-full h-[40vh] overflow-hidden object-cover rounded-2xl' src="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </div>
          <div className='w-1/4 h-[40vh] rounded-2xl bg-pink-300'>
            <img onClick={() => navigate('/products')} className='cursor-pointer w-full h-[40vh] overflow-hidden object-cover rounded-2xl' src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1187&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>

        </div>

      </div>

    </div>
  )

}

export default Home
