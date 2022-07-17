import { useLocation } from 'react-router-dom';
import { useRecoilValue, useRecoilValueLoadable } from 'recoil';
import { toCurrencyFormat } from '../helper/helpers';
import { Product, productsList } from '../store/products';
import BreadCrumb from '../views/Breadcrumb';
import ItemList from './ItemList';
import Rating from './Rating';

const ProductsView = () => {
  const products = useRecoilValue<Product[]>(productsList);
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const product = products.filter((product) => product.id === Number(id))[0];
  return (
    <section className='pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
      <BreadCrumb category={product.category} crumb={product.title} />
      <div className='lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0'>
        <figure className='flex-shrink-0 rounded-2xl overflow-hidden px-4 py-4 bg-white view_image'>
          <img
            src={product.image}
            alt={product.title}
            className='object-contain w-full h-72'
          />
        </figure>
        <div className='card-body px-1 lg:px-12'>
          <h2 className='card-title'>
            {product.title}
            <span className='badge badge-accent ml-2'>NEW</span>
          </h2>
          <p>{product.description}</p>
          <Rating />
          <p className='mt-2 mb-4 text-3xl'>
            {' '}
            {toCurrencyFormat(product.price)}
          </p>
          <div className='card-actions'>
            <button className='btn btn-primary'>장바구니에 담기</button>
            <a className='btn btn-outline ml-1' href='/cart'>
              장바구니로 이동
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsView;
