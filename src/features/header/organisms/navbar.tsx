import { Address } from "../atoms/address"
import { Basket } from "../atoms/basket"
import { LoginButton } from "../atoms/login-button"
import { Logo } from "../atoms/logo"
import { Menu } from "../atoms/menu"
import { PhoneNumber } from "../atoms/phone-number"

export const Navbar = ()=>{
    return(
        <div className="flex navbar h-20">
            <Logo />
            <Menu />
            <Address />
            <PhoneNumber />
            <Basket />
            <LoginButton />
        </div>
    )
}
