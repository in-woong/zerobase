import React, { Suspense } from 'react';
import { useRecoilValueLoadable } from 'recoil';
import { Product, ProductsList } from '../store/product';

import ProductsLoad from './ProductsLoad';

type Items = {
  title?: string;
  limit?: number;
  data?: Array<Product>;
  scroll?: boolean;
} & typeof defaultProps;

const defaultProps = {
  title: '',
  limit: 4,
  data: [],
  scroll: false,
};

const ItemList = ({ title, limit, scroll }: Items): JSX.Element => {
  const ProductList = React.lazy(() => import('./ProductsList'));
  const ProductLoadable = useRecoilValueLoadable<Product[]>(productsList);
  let products: Product[] =
    'hasValue' === ProductsLoadable.state ? ProductLodable.contents : [];
  switch (title) {
    case '패션':
      products = products
        .filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        )
        .slice(0, limit);
      break;
    case '액세서리':
      products = products
        .filter((item) => item.category === 'jewelery')
        .slice(0, limit);
      break;
    case '디지털':
      products = products
        .filter((item) => item.category === 'electronics')
        .slice(0, limit);
      break;
    default:
      products = products;
  }

  return (
    <>
      <h2>
        <div>
          <Suspense fallback={<ProductsLoad limit={limit} />}>
            <ProductsList products={products} limit={limit}></ProductsList>
          </Suspense>
        </div>
      </h2>
    </>
  );
};

ItemList.defaultProps = defaultProps;

export default ItemList;
