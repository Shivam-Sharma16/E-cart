import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { asyncLoginUser } from '../store/actions/userAction';

const Login = () => {
  const { register, handleSubmit, reset } = useForm()
  const dispatch = useDispatch()

  const loginHandler = (user) => {
    user.id = nanoid()
    dispatch(asyncLoginUser(user))
    reset()
  }

  return (
    <div className=''>
      <div className='flex flex-col justify-center items-center relative'>
        <i className="text-6xl border-[#00264D] rounded-[50%] p-[1rem] bg-[#00264D] text-white absolute top-[20%]
            ri-user-fill"></i>
        <form onSubmit={handleSubmit(loginHandler)} className='h-[50vh] flex flex-col rounded-2xl items-center justify-center gap-[1rem] bg-white/40 w-fit mt-[10rem] p-[2rem]' >
          <div><i className="bg-[#00264D] text-4xl text-white outline-0 font-thin px-[0.5rem] py-[0.5rem]
                 ri-user-fill"></i>
            <input className='bg-[#385273] text-3xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
              {...register("email")} type="email" placeholder='Email Id' /></div>
          <div><i className="bg-[#00264D] text-4xl text-white outline-0 font-thin px-[0.5rem] py-[0.5rem]
                ri-lock-fill"></i>
            <input {...register('password')}
              className='bg-[#385273] text-3xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]' type="password" placeholder='Password' /></div>
          <button className='text-2xl border-0 w-full py-1 outline-0 bg-blue-500 text-white active:scale-99'>LOGIN</button>
          <p>Don't have an Account? <Link className="text-blue-800" to={"/register"}>Create Now</Link></p>
        </form>
      </div>

    </div>
  )
}

export default Login
