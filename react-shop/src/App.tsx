import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Accesory from './views/Accesory';
import Digital from './views/Digital';
import Fashion from './views/Fashion';
import Index from './views/Index';

function App() {
  return (
    <div className='App text-white'>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Slider />
              <Index />
            </>
          }
        />
        <Route path='/fashion' element={<Fashion />} />
        <Route path='/accesory' element={<Accesory />} />
        <Route path='/digital' element={<Digital />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
