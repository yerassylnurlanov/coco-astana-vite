import { Navbar } from "./organisms/navbar"
import { SearchForm } from "../search/search"
export const Header = ()=>{
    return(
        <div className="fixed z-15 w-full">
            <Navbar />
        </div>)
}
