import MainPage from './components/MainPage';
import { Routes, Route } from 'react-router-dom';
import Blog from './components/Blog';
import Tech from './components/Tech';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='Blog' element={<Blog />} />
        <Route path='Tech/*' element={<Tech />} />
      </Routes>
    </div>
  );
}

export default App;
