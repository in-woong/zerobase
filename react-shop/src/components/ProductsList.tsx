import { Link } from 'react-router-dom';
import type { Product } from '../store/product';
import ProductsLoad from './ProductsLoad';

const ProductsList = ({
  products,
  limit,
}: {
  products: Product[];
  limit: number;
}): JSX.Element => {
  return (
    <>
      {0 < products.length ? (
        products.slice(0, limit).map((product: Product) => {
          return (
            <Link
              to={`/product/${product.id}`}
              className='card card-bordered border-gray200'
            >
              <figure className='flex h-80 bg0white overflow-hidden'>
                <img
                  src={product.image}
                  alt='상품 이미지'
                  className='transition-transform duration-300'
                />
              </figure>
              <div className='card-body bg-gray-100 dark:bg-gray-700'>
                <p className='card-title text-base'>{product.title}</p>
                <p className='text-base'>{product.price}</p>
              </div>
            </Link>
          );
        })
      ) : (
        <ProductsLoad limit={limit} />
      )}
    </>
  );
};
export default ProductsList;