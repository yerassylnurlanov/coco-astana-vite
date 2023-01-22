import { Navbar } from "./organisms/navbar"
import { SearchForm } from "./organisms/search"
export const Header = ()=>{
    return(
        <div className="fixed z-15  w-screen">
            <Navbar />
            <SearchForm/>
        </div>)
}
