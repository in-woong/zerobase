import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPage from './components/BlogPage';
import JavascriptPage from './components/JavascriptPage';
import MainPage from './components/MainPage';
import ReactDocPage from './components/ReactDocPage';
import ReactPage from './components/ReactPage';
import TechPage from './components/TechPage';

function App() {
  
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path={'/'} element={<MainPage />}></Route>
        <Route path={'tech'} element={<TechPage />}>
          <Route path={'javascript'} element={<JavascriptPage />}></Route>
          <Route path={'react'} element={<ReactPage />}>
            <Route path={':docId'} element={<ReactDocPage />}></Route>
          </Route>
        </Route>
        <Route path={'blog'} element={<BlogPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
