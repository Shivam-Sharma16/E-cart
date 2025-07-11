import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { asyncCartHandler } from '../store/actions/userAction';

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.userReducer);
  const cartItems = user?.cart || [];

  const updateCart = (updatedCart) => {
    const updatedUser = { ...user, cart: updatedCart };
    dispatch(asyncCartHandler(updatedUser));
  };

  const decreaseQty = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const increaseQty = (id) => {
    const updatedCart = cartItems.map(item =>
      item.id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    updateCart(updatedCart);
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    updateCart(updatedCart);
    toast.error("item removed from the cart")
  };

  return (
    <div className='p-8 min-h-[100vh]'>
      <h1 className='text-4xl font-bold mb-6'>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>No items in cart. <button className='bg-gray-500 text-white px-[1rem] py-[0.5rem] rounded active:scale-97 uppercase'
          onClick={() => navigate('/products')}>add products</button> </p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className='flex items-center gap-6 p-4 mb-4  rounded-lg shadow-lg bg-gray-400/40'>
            <img src={item.image} alt={item.title} className='w-[120px] h-[120px] object-cover rounded' />

            <div className='flex-1'>
              <h2 className='text-2xl font-semibold'>{item.title}</h2>
              <p className='text-gray-600'>{item.description.slice(0, 200)}...
                <small className='text-xl text-blue-800 cursor-pointer' onClick={() => navigate(`/products/${item.id}`)}> more</small>
              </p>
              <p className='text-green-600 font-bold mt-1'>₹{item.price}</p>
            </div>

            <div className='flex items-center gap-2'>
              <button onClick={() => decreaseQty(item.id)} className='bg-gray-300 px-3 py-1 text-lg rounded'>-</button>
              <span className='text-xl font-semibold'>{item.quantity}</span>
              <button onClick={() => increaseQty(item.id)} className='bg-gray-300 px-3 py-1 text-lg rounded'>+</button>
            </div>

            <button
              onClick={() => removeItem(item.id)}
              className='bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded'
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Cart;
