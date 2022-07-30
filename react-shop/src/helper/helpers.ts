import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const currencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
});

export const ScrollTop = () => {
  const { pathname } = useLocation();
  console.log('pathname', pathname);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const toCurrencyFormat = (value: number) => currencyFormat.format(value);
