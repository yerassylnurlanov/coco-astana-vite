import burger from '@assets/images/header/category.svg';
import { MenuDropdown } from '../organisms/menu-dropdown';

export const Menu = () => {
    return (
        <a className="p-3 flex m-3 items-center flex-nowrap whitespace-nowrap cursor-pointer">
            <img src={burger} alt="call" className="max-w-full max-h-full" />
            <p className="ml-2">Меню</p>
        </a>
    );
};
