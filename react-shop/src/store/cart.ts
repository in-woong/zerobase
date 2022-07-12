import { atom, selector } from 'recoil';
import ItemList from '../components/ItemList';
import ProductsList from '../components/ProductsList';
export interface CartInfo {
  id: number;
  count: number;
}

export interface CartItems {
  id: string;
  title: string;
  price: number;
  count: number;
  image: string;
}

export interface CartState {
  items: Record<string | number, CartInfo>;
}

export const cartState = atom<CartState>({
  key: 'cart',
  default: JSON.parse(localStorage.getItem(CART_ITEM) as string) ?? {},
});

export const cartCount = selector<number>({
  key: 'cartCount',
  get: ({ get }) => {
    const cartItems = get(cartState);
    return Object.keys(cartItems).reduce((acc: number, index: string) => {
      return acc + cartItems[index].count || 0;
    }, 0);
  },
});

export const cartTotal = selector<number>({
  key: 'cartTotal',
  get: ({ get }) => {
    const products = get(productsList);
    const cartItems = get(cartState);
    return Object.keys(cartItems).reduce((acc:Number, id:string)=>{
        return acc + cartItems[id].count * products[parseInte(id)-1].price||0;
    },0);
  },
});


export const catList = selector<CartItems[]>({
    key:"cartList",
    get:({get})=>{
        const products = get(productsList);
        const cartITems = get(cartState);
        return Object.keys(cartITems).map((id)=>{
            const items = cartItems[id];
            return(
                id:items.id,
                image:products[items.id -1].image,
                title:products[items.id -1].title,
                count: items.count,
                price:Items.count * products[Items.id -1].price,
            );
        })
    }});
})

// const addToCart

// const removeToCart