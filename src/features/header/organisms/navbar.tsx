import { Address } from '../atoms/address';
import { Basket } from '../atoms/basket';
import { LoginButton } from '../atoms/login-button';
import { Logo } from '../atoms/logo';
import { Menu } from '../atoms/menu';
import { PhoneNumber } from '../atoms/phone-number';
import { MenuDropdown } from './menu-dropdown';

export const Navbar = () => {
    return (
        <div className="flex navbar h-20">
            <Logo />
            <MenuDropdown />
            <Address />
            <PhoneNumber />
            <Basket />
        </div>
    );
};
