import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { asyncCreateProduct } from '../store/actions/productAction';


const Createproduct = () => {
  const { register, handleSubmit, reset } = useForm()
  const disptach = useDispatch()
  const navigate = useNavigate()

  const CreateProductHandler = (product) => {
    product.id = nanoid()
    disptach(asyncCreateProduct(product))
    reset()
    navigate('/products')
  }

  return (
    <div className='flex justify-between items-center my-[5rem]'>
      <div className='w-1/2 '>
        <h1 className='text-8xl'>Admin's View</h1>
        <h2 className='text-5xl py-[1rem] font-thin'><span className='text-green-600 font-medium'>Create</span> your product </h2>
        <p className='text-2xl pr-[4rem] font-thin'>This panel is for admins only where the admin can create the product .</p>


        <p className='text-xl font-thin'>1.Upload the image of the product</p>
        <p className='text-xl font-thin'>2.Enter the title </p>
        <p className='text-xl font-thin'>3.Enter the price</p>
        <p className='text-xl font-thin'>4.Enter description of the item</p>
        <p className='text-xl font-thin'>5.Enter Category</p>
        <p className='text-xl font-thin'>6.click on Create button</p>


      </div>
      <div className=' w-1/2 flex flex-col justify-center items-center relative'>
        <form onSubmit={handleSubmit(CreateProductHandler)} className='h-[65vh] flex flex-col rounded-2xl items-center justify-center gap-[1rem] bg-gray-400/40 w-fit  p-[2rem]' >
          <input className='bg-[#385273]/40 text-2xl w-full rounded-xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
            {...register("image")} type="url" placeholder='image url' />
          <input className='bg-[#385273]/40 text-2xl w-full rounded-xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
            {...register("title")} type="text" placeholder='title' />
          <input className='bg-[#385273]/40 text-2xl w-full rounded-xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
            {...register("price")} type="number" placeholder='enter price' />
          <textarea {...register('description')}
            className=' bg-[#385273]/40 text-2xl w-full rounded-xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
            placeholder='Enter description'
          ></textarea>
          <input {...register('category')}
            className='bg-[#385273]/40 text-2xl w-full rounded-xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
            type="text" placeholder='enter category' />
          <button className='text-2xl border-0 w-full py-1 outline-0 bg-blue-500 text-white active:scale-99 rounded-2xl'>Create!</button>
        </form>
      </div>
    </div>
  )
}

export default Createproduct
