import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Accesory from './views/Accesory';
import Digital from './views/Digital';
import Fashion from './views/Fashion';
import Index from './views/Index';

import { useRef } from 'react';
import { ScrollTop } from './helper/helpers';
import Products from './views/Products';
import Cart from './views/Cart';
import Error from './views/Error';

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
        <Nav />
        <section className='main pt-16 mb-auto bg-white dark:bg-gray-800'>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='*' element={<Error />} />
            <Route path='/product/:id' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/fashion' element={<Fashion />} />
            <Route path='/accesory' element={<Accesory />} />
            <Route path='/digital' element={<Digital />} />
          </Routes>
        </section>
        <Footer />
      </section>
      {/* <Drawer closeOverlay={closeOverlay}/> */}
    </BrowserRouter>
  );
}

export default App;
