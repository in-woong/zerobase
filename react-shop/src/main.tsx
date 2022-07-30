import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App';
import { CART_ITEM } from './composables/useCartLoad';
import { ScrollTop } from './helper/helpers';
import './index.css';
import { cartState } from './store/cart';

const initialValue =
  JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RecoilRoot initializeState={() => Object.assign(cartState, initialValue)}>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
