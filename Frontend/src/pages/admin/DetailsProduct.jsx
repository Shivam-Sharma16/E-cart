import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import UpdateProduct from './UpdateProduct';
import { asyncCartHandler } from '../../store/actions/userAction';
import { toast } from 'react-toastify';

const DetailsProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.userReducer)
  const { product } = useSelector((state) => state.productReducer);
  const param = useParams()

  const details = product?.find(product => product.id == param.id)

  const cartHandler = (product) => {
    const productWithQty = { ...product, quantity: 1 };
    const alreadyInCart = user.cart.find(item => item.id === product.id);
    if (alreadyInCart) {
      alert("Product already in cart.");
      return;
    }
    const updatedCart = [...user.cart, productWithQty];
    const updatedUser = { ...user, cart: updatedCart };
    dispatch(asyncCartHandler(updatedUser));
    toast.success('product added to cart!')
  };
  return (
    <div >
      <div className='relative flex items-center justify-between gap-[2rem] p-[2rem]'>
        <button
          onClick={() => navigate(-1)}
          className='absolute top-[0%] right-[0] cursor-pointer bg-green-500 text-white m-auto my-[2rem] active:scale-99 rounded-xl px-[1rem] py-[0.5rem] '>
          Go Back</button>

        <div className='w-[50%] rounded-4xl  bg-amber-600'>
          <img className='w-full aspect-[1/1] shadow  object-fit rounded-4xl' src={details?.image} alt="" />
        </div>
        <div className='w-[50%] p-[2rem] flex flex-col gap-[1rem]'>
          <h1 className='text-4xl font-medium pb-[2rem] text-shadow-lg '>{details?.title}</h1>
          <p className='text-2xl font-thin  '>{details?.description}</p>
          <p className='text-xl'>Category: {details?.category}</p>
          <p className='text-xl'>MRP:  $<span className='text-green-700 font-bold'>{details?.price}</span></p>
          <button
            onClick={() => cartHandler(details)}
            className='bg-blue-500 cursor-pointer text-white m-auto my-[2rem] active:scale-99 rounded-xl px-[1rem] py-[0.5rem] '>Add to cart</button>

          <textarea className='w-full bg-gray-400 shadow text-white rounded text-xl font-thin outline-0 p-[1rem] '
            placeholder='Feedback...'></textarea>

        </div>
      </div>
      {user && user.isAdmin &&
        <div className='flex justify-between items-center w-full gap-[1rem] mb-[3rem]'>
          <div className='w-1/2' >
            <UpdateProduct />
          </div>
          <div className='w-1/2 '>
            <h1 className='text-8xl'>Admin's View</h1>
            <h2 className='text-5xl py-[1rem] font-thin'><span className='text-green-600 font-medium'>Modify</span> or <span className='text-red-600 font-medium'>Delete</span>  the product </h2>
            <p className='text-2xl pr-[4rem] font-thin'>This panel is for admins only where the admin can either update the details of the product or can delete the product.</p>
          </div>
        </div>
      }
    </div>
  )
}

export default DetailsProduct
