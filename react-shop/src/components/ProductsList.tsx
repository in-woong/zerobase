import { Link } from 'react-router-dom';
import type { Product } from '../store/products';
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
              key={product.id}
              to={`/product/${product.id}`}
              className='card card-bordered border-gray200'
            >
              <figure className='z-1 flex h-80 bg-white overflow-hidden first-of-type:transition-transform first-of-type:duration-300 hover:first-of-type:-translate-y-1 hover:first-of-type:scale-125 '>
                <img src={product.image} alt='상품 이미지' className='' />
              </figure>
              <div className=' z-10 card-body bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-200'>
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
