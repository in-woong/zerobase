import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Accesory from './views/Accesory';
import Digital from './views/Digital';
import Fashion from './views/Fashion';
import Index from './views/Index';

import { useEffect, useRef } from 'react';
import { ScrollTop } from './helper/helpers';

function App() {
  const $hamburger = useRef<HTMLInputElement>(null);
  const closeOverlay = () => {
    $hamburger?.current?.click();
  };
  // useCartLoad();

  return (
    <BrowserRouter>
      <ScrollTop />
      <input
        type='checkbox'
        id='side-menu'
        className='drawer-toggle'
        ref={$hamburger}
      />
      <section className='drawer-content'>
        <div className='App text-white'>
          <Nav />
          <section className='main pt-16'>
            <Routes>
              <Route path='/' element={<Index />} />
              {/* <Route path="*" element={<Error/>}/> */}
              {/* <Route path="/" element={<index/>}/> */}
              {/* <Route path='/product/:id' element={<Products />} /> */}
              {/* <Route path='/cart' element={<Cart />} /> */}
              <Route path='/fashion' element={<Fashion />} />
              <Route path='/accesory' element={<Accesory />} />
              <Route path='/digital' element={<Digital />} />
            </Routes>
          </section>
          <Footer />
        </div>
      </section>
      {/* <Drawer closeOverlay={closeOverlay}/> */}
    </BrowserRouter>
  );
}

export default App;
