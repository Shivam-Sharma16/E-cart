import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { asyncDeleteProduct, asyncUpdateProduct } from '../../store/actions/productAction';

const UpdateProduct = () => {
  const dispatch = useDispatch()

  const navigate = useNavigate()
  const { product } = useSelector((state) => state.productReducer);
  const param = useParams()

  const details = product?.find(product => product.id == param.id)

  const { register, handleSubmit } = useForm({
    defaultValues: {
      image: details?.image,
      title: details?.title,
      category: details?.category,
      price: details?.price,
      description: details?.description
    }
  })
  const updatehandler = (product) => {
    product.id = details?.id,
      console.log(product);
    dispatch(asyncUpdateProduct(product, product.id))
    toast.success('Product details are updated')
  }
  const deletehandler = (e) => {
    e.id = details?.id,
      dispatch(asyncDeleteProduct(e.id))
    console.log(e);
    navigate('/products')
    toast.error('Product Deleted')
  }
  return (
    <div >
      <div className='flex flex-col justify-center items-center relative'>
        <form onSubmit={handleSubmit(updatehandler)} className='h-fit flex flex-col rounded-2xl items-center justify-center gap-[1rem] bg-gray-400 w-fit p-[2rem]' >
          <input className='border-b-1 text-2xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
            {...register("image")} type="url" placeholder='image url' />
          <input className='border-b-1 text-2xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
            {...register("title")} type="text" placeholder='title' />
          <input className='border-b-1 text-2xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
            {...register("price")} type="number" placeholder='enter price' />
          <textarea {...register('description')}
            className='border-b-1  w-full text-2xl my-[1rem] text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
            placeholder='Enter description'
          ></textarea>
          <input {...register('category')}
            className='border-b-1 text-2xl text-white outline-0 font-thin px-[1rem] py-[0.5rem]'
            type="text" placeholder='enter category' />
          <button className='text-2xl bg-green-500 border-0 w-full py-1 outline-0 rounded-xl shadow  text-white active:scale-99'>Update!</button>
          <button onClick={deletehandler} type='button' className='text-2xl border-0 w-full py-1 outline-0 bg-red-500 rounded-xl shadow  text-white active:scale-99'>delete!</button>
        </form>
      </div>
    </div>
  )
}

export default UpdateProduct
