import { CategoryBox } from "./category-box/category-box"

export const PopularCategories = ()=>{
    return(
        <div className="w-full mt-10 text-center">
            <h1 className="text-2xl font-bold">Категории</h1>
            <ul className="flex mt-5 gap-2 ">
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
                <CategoryBox />
            </ul>
        </div>
    )
}
