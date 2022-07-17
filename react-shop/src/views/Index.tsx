import ItemList from '../components/ItemList';
import Slider from '../components/Slider';

export default function Index() {
  return (
    <>
      <Slider />
      <section className='pt-6 lg:pt-12 pb-4 lg:pb-8 xl:px-2 mt-10 xl:container mx-auto'>
        <ItemList title='패션' scroll={true} />
      </section>
      <section className='pt-6 lg:pt-12 pb-4 lg:pb-8 xl:px-2 mt-10 xl:container mx-auto'>
        <ItemList title='액세서리' scroll={true} />
      </section>
      <section className='pt-6 lg:pt-12 pb-4 lg:pb-8 xl:px-2 mt-10 xl:container mx-auto'>
        <ItemList title='디지털' scroll={true} />
      </section>
    </>
  );
}
