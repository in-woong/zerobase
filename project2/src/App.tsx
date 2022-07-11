import '../styles/global.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Slider from './components/Slider';
import Index from './views';

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <div className='App'>
        <Nav />
        <Slider />
        <Index />
        <Footer />
      </div>
    </>
  );
}

export default App;
