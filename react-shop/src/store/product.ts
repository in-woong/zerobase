import { atom, selector } from 'recoil';
export interface Product {
  category: string;
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};
export const productState = atom({ key: 'productState', default: '' });

export const fashionState = selector<Product[]>({
  key: 'fashionState',
  get: ({ get }) => {
    const fashion = [...get(productState)].filter((product) =>
      product.category.split(' ').includes('clothing')
    );
    return fashion;
  },
});

export const accesoryState = selector({
  key: 'accesoryState',
  get: ({ get }) => {
    const accesory = [...get(productState)].filter(
      (product) => product.category == 'jewelery'
    );
    return accesory;
  },
});

export const digitalState = selector({
  key: 'digitalState',
  get: ({ get }) => {
    const digital = [...get(productState)].filter(
      (product) => product.category == 'electronics'
    );
    return digital;
  },
});
