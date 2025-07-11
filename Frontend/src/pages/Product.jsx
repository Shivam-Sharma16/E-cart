import { lazy } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const InfiniteScroll = lazy(() => import('react-infinite-scroll-component'));
import {asyncCartHandler} from '../store/actions/userAction';
import useInfinite from './../utils/useinfinite';


const Product = () => {
   const { product } = useSelector((state) => state.productReducer);
  const { user } = useSelector((state) => state.userReducer);
  const {  hasMore, fetchlazyProducts } = useInfinite();

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const producthandler = (id) => {
    navigate(`/products/${id}`)
  }

 

  const cartHandler = (product) => {

  if (!user || !user.cart) {
    toast.error("You must be logged in to add items to cart");
    return;
  }

  const productWithQty = { ...product, quantity: 1 };

  const alreadyInCart = user.cart.find(item => item.id === product.id);
  if (alreadyInCart) {
    toast.error('Product already in cart.');
    return;
  }

  const updatedCart = [...user.cart, productWithQty];
  const updatedUser = { ...user, cart: updatedCart };
  dispatch(asyncCartHandler(updatedUser));
  toast.success('Product added to cart!');
};
  const products = product.map(product => {
    return (
      <div className='w-[30%] rounded-2xl p-[1rem]  cursor-pointer bg-gray-300' key={product.id}>
        <img className='w-full h-[40vh] object-fit rounded-t-2xl' src={product.image} alt="" />
        <h1 className='text-2xl pt-2 font-thin'>{product.title}</h1>
        <p className='text-md font-thin'>{(product.description).slice(0, 100)}  ... <small className='text-xl text-blue-800' onClick={() => producthandler(product.id)}> more</small></p>
        <div className='flex items-center justify-between pt-2 '>
          <p className='text-xl font-thin text-green-500'>${product.price}</p>
          <button
            onClick={() => cartHandler(product)}
            className='bg-blue-500 text-white rounded-xl px-[1rem] py-[0.5rem] '>Add to cart</button>
        </div>
      </div>
    )
  })
  return <InfiniteScroll
    dataLength={products.length}
    next={fetchlazyProducts}
    hasMore={hasMore}
    loader={<h4>Loading...</h4>}
    endMessage={
      <p style={{ textAlign: "center" }}>
        <b>Yay! You have seen it all</b>
      </p>
    }
  >  <div className='flex flex-wrap gap-[2rem] my-[3rem]   '>
      {products}
    </div>
  </InfiniteScroll>

}

export default Product
