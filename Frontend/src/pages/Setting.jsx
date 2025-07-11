import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form'
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from '../store/actions/userAction'


const Setting = () => {
  const { user } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: user?.email,
      mobile: user?.mobile,
      password: user?.password, 
      name: user?.name,
      image: user?.image
    }
  })

  const updateHandler = (e) => {
    console.log(e);
    e.id = user.id
    dispatch(asyncUpdateUser(e.id, e))
  }

  const LogoutHandler = () => {
    console.log();
    
    dispatch(asyncLogoutUser(user))
  }

  const deleteHandler = () => {
    dispatch(asyncDeleteUser(user.id))
  }

  return (
    <div className='w-full min-h-screen  flex justify-between items-center'>
      <div className='w-1/3 flex flex-col gap-[2rem]  p-[4rem] border-r-2 border-gray-800'>
        {user?.image ? <img className='w-[20vw] aspect-[1/1] object-fit rounded-[50%] ' src="https://images.unsplash.com/photo-1564564244660-5d73c057f2d2?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          :
          <img className='w-[20vw] aspect-[1/1] object-fit rounded-[50%] ' src="https://imgs.search.brave.com/l3Peo8xGaYJ3DkCaTign1FsjB_-XrvYU_bJsBGL833E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZs/YXRpY29uLmNvbS8x/MjgvMTQ5LzE0OTA3/MS5wbmc" alt="" />}
        <button
          type="button"
          onClick={LogoutHandler}
          className="text-white rounded mt-5 text-3xl px-5 py-3 bg-red-400 cursor-pointer"
        >
          Logout User
        </button>
        <button
          type="button"
          onClick={deleteHandler}
          className="text-white rounded mt-5 text-3xl px-5 py-3 bg-red-800 cursor-pointer"
        >
          DELETE ACCOUNT
        </button>
      </div>
      <div className='w-2/3 '>
        <div className='flex flex-col justify-center items-center relative mb-[1rem] mt-[-6rem] '>

          <form onSubmit={handleSubmit(updateHandler)} className='h-[65vh] flex flex-col rounded-2xl items-center justify-center gap-[1rem] bg-gray-500/40  mt-[10rem] p-[2rem]' >

            <div className='flex w-full justify-between items-center '>
              <h1 className='text-2xl'>Image:</h1>
              <input className='text-2xl text-gray-700 border-b ml-[1rem] outline-0 font-thin px-[1rem] py-[0.5rem]'
                {...register("image")} type="url" placeholder='Image Url' /></div>
            <div className='flex w-full  justify-between items-center'>
              <h1 className='text-2xl'>Name:</h1>
              <input className='text-2xl text-gray-700 border-b ml-[1rem] outline-0 font-thin px-[1rem] py-[0.5rem]'
                {...register("name")} type="text" placeholder='Full Name' /></div>

            <div className='flex w-full justify-between items-center'>
              <h1 className='text-2xl'>E-mail:</h1>
              <input className='text-2xl text-gray-700 border-b ml-[1rem] outline-0 font-thin px-[1rem] py-[0.5rem]'
                {...register("email")} type="email" placeholder='Email Id' /></div>

            <div className='flex  w-full justify-between items-center'>
              <h1 className='text-2xl'>Contact:</h1>
              <input className='text-2xl text-gray-700 border-b ml-[1rem] outline-0 font-thin px-[1rem] py-[0.5rem]'
                {...register("mobile")} type="phone" placeholder='Mobile No.' /></div>

            <div className='flex w-full justify-between items-center'>
              <h1 className='text-2xl'>Password:</h1>
              <input {...register('password')}
                className='text-2xl text-gray-700 border-b ml-[1rem] outline-0 font-thin px-[1rem] py-[0.5rem]' type="password" placeholder='********' /></div>
            <button

              className="text-white rounded mt-5 text-3xl px-5 py-3 bg-green-400 cursor-pointer"
            >
              Update User
            </button>

          </form>
        </div>
      </div>

    </div>
  )
}

export default Setting
