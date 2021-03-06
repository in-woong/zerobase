import { Link } from 'react-router-dom';
import { menues } from './Nav';

interface DrawerProps {
  closeOverlay: () => void;
}

const Drawer = ({ closeOverlay }: DrawerProps) => {
  return (
    <div className='drawer-side'>
      <label htmlFor='side-menu' className='drawer-overlay'></label>
      <ul className='menu w-60 sm:w-80 p-4 overflow-y-auto bg-white dark:bg-base-100'>
        {menues.map((menu) => {
          return (
            <li>
              <Link
                key={menu.name}
                className='text-gray-700 active:text-white dark:text-white'
                to={`/${menu.name}`}
                onClick={closeOverlay}
              >
                {menu.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Drawer;
