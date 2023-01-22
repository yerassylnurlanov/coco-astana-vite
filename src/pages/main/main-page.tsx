// import { SearchForm } from "@/features/search/search"
import { SearchForm } from "src/features/search/search"
import { PopularCategories } from "./organisms/popular-categories"

export const MainPage = ()=>{
    return(
        <div className="max-w-2xl pt-20 m-auto">
            <SearchForm  />
            <PopularCategories />
        </div>
    )
}
