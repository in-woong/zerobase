import { useRecoilValue } from 'recoil';
import { fashionState } from '../store/product';
import type { Product } from '../store/product';

export default function Fashion() {
  const fashion = useRecoilValue(fashionState);
  console.log('fashion', fashion);
  return (
    <article className=' lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 pt-40 mb-20 xl:container mx-auto'>
      <h2 className='mb-5 lg:mb-8 text-3xl lg:text-4xl text-center font-bold'>
        패션
      </h2>
      {fashion.map((item: Product) => {
        <span>hey</span>;
        // console.log(item);
        // <div
        //   className='grid gap-6 md:grid-cols-2 lg:grid-cols-4 item_list'
        //   data-scroll='false'
        // >
        //   <a
        //     className='card card-bordered border-gray-200 dark:border-gray-800 card-compact lg:card-normal'
        //     href='/product/1'
        //   >
        //     <figure className='flex h-80 bg-white overflow-hidden'>
        //       <img
        //         src={`${item.image}`}
        //         alt='상품 이미지'
        //         className='transition-transform duration-300'
        //       />
        //     </figure>
        //     <div className='card-body bg-gray-100 dark:bg-gray-700'>
        //       <p className='card-title text-base'>{`${item.description}`}</p>
        //       <p className='text-base'>{`${item.price}`}</p>
        //     </div>
        //   </a>
        // </div>;
      })}
    </article>
  );
}
