import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Link } from 'react-router-dom';
export default function Slider() {
  return (
    <div className='carousel-wrapper'>
      <Carousel
        showThumbs={false}
        infiniteLoop={true}
        className='w-full max-h-screen sm:h-96'
      >
        <div>
          <img
            className='h-screen relative sm:h-96'
            src='https://images.unsplash.com/photo-1565084888279-aca607ecce0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
          />
          <div className='flex flex-col text-left absolute bottom-1/3z-1 mb-16 sm:mb-0  sm:bottom-1/3  left-16 text-red'>
            <span className='text-4xl font-bold'>물빠진 청바지!</span>
            <span className='my-2 text-base'>
              이제 막 도착한 패션 청바지를 구경해보세요
            </span>
            <Link to={'/fashion'}>
              <button className='btn btn-ghost  hover:bg-gray-900  bg-gray-800 text-gray-300 h-4 w-28 text-sm '>
                바로가기
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 ml-1'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div>8=u8
          <img
            className='h-screen relative sm:h-96 '
            src='https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80'
          />
          <div className='flex flex-col text-left absolute bottom-1/3  sm:mb-0  sm:bottom-1/3  z-1 mb-16 left-16 text-red'>
            <span className='text-4xl font-bold'>신속한 업무처리!</span>
            <span className='my-2 text-base'>
              다양한 디지털 상품을 둘러보세요
            </span>
            <Link to={'/digital'}>
              <button className='btn btn-ghost hover:bg-gray-900   bg-gray-800 text-gray-300 h-4 w-28 text-sm '>
                바로가기
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 ml-1'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <img
            className='h-screen relative sm:h-96 '
            src='https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          />
          <div className='flex flex-col text-left absolute bottom-1/3 z-1 mb-16  sm:mb-0  sm:bottom-1/3  left-16 text-red'>
            <span className='text-4xl font-bold'>신선한 식품!</span>
            <span className='my-2 text-base'>
              농장 직배송으로 더욱 신선한 식료품을 만나보세요
            </span>
            <Link to={'/grocery'}>
              <button className='btn btn-ghost hover:bg-gray-900 bg-gray-800 text-gray-300 h-4 w-28 text-sm '>
                바로가기
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 ml-1'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
