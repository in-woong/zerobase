import ItemList from '../components/ItemList';
import BreadCrumb from './Breadcrumb';

export default function Fashion() {
  return (
    <section className='pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto'>
      <BreadCrumb category='홈' crumb='패션' />
      <article className='pt-2 lg:pt-4 pb-4 lg:pb-8 px-4 xl:px-2 mb-20 xl:container mx-auto'>
        <ItemList title='패션' limit={12} />
      </article>
    </section>
  );
}
