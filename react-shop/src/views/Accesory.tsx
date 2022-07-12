import { useRecoilValue } from 'recoil';
import { accesoryState } from '../store/product';

import ItemList from '../components/ItemList';

const Accesory = (): JSX.Element => {
  const accesory = useRecoilValue(accesoryState);
  console.log('accesory', accesory);
  return (
    <section>
      {/* <BreadCrumb category='홈' crumb='액세서리' /> */}
      <article>
        <ItemList title='액세서리' limit={4} />
      </article>
    </section>
  );
};

export default Accesory;
