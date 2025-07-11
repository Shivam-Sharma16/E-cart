import { useNavigate } from "react-router-dom";

const Footer = () => {

  const navigate = useNavigate()
  return (
    <footer className="bg-gray-400 text-gray-300 px-6 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">

        <div>
          <h1 className="text-2xl font-bold text-white">E-cart</h1>
          <p className="mt-2 text-sm text-gray-900">Crafted with creativity & precision.</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Quick Links</h2>
          <ul className="space-y-2 text-white">
            <li><a onClick={() => navigate('/')} className="hover:text-black">Home</a></li>
            <li><a onClick={() => navigate('/about')} className="hover:text-black">About</a></li>
            <li><a onClick={() => navigate('/products')} className="hover:text-black">Products</a></li>
            <li><a onClick={() => navigate('/setting')} className="hover:text-black">Settings</a></li>
          </ul>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Contact</h2>
          <ul className="space-y-2 text-white text-sm">
            <li>Email: <a href="mailto:shivam@example.com" className="hover:text-black">E-cart@gmail.com</a></li>
            <li>Phone: <a href="tel:+911234567890" className="hover:text-black">+91 1234567890</a></li>
            <li>Location: India</li>
          </ul>
        </div>


        <div>
          <h2 className="text-lg font-semibold text-white mb-2">Follow Me</h2>
          <div className="flex space-x-4 text-xl text-black">
            <a href="https://instagram.com" target="_blank" className="hover:text-pink-500"><i class="ri-instagram-fill"></i></a>
            <a href="https://github.com" target="_blank" className="hover:text-gray-100"><i class="ri-github-fill"></i></a>
          </div>
        </div>
      </div>


      <div className="mt-10 text-center text-sm text-gray-700 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} E-CART. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
