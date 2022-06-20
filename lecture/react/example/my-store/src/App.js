import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Suspense } from 'react';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<span>isLoading...</span>}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit' element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </QueryClientProvider>
  );
}

export default App;
