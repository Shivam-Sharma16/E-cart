import React, { useEffect, useRef } from 'react';
import Mainroutes from './routes/Mainroutes';
import Navbar from './components/Navbar';
import { useDispatch } from 'react-redux';
import { asyncCurrentUser } from './store/actions/userAction';
import { asyncLoadProduct } from './store/actions/productAction';
import Lenis from '@studio-freight/lenis';
import Footer from './components/Footer';

const App = () => {
  const dispatch = useDispatch();
  const lenisRef = useRef(null);

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProduct());

    const lenis = new Lenis({
      smooth: true,
      smoothTouch: true,
      gestureOrientation: 'vertical',
      normalizeWheel: true,
    });

    lenisRef.current = lenis;

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      // optional: lenis.destroy() if needed
    };
  }, []);

  return (
    <div className='bg-[#F6F6F6] p-[2rem]  w-screen h-fit'>
      <Navbar />
      <Mainroutes />
      <Footer />
    </div>
  );
};

export default App;
