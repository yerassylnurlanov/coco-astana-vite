// import { SearchForm } from "@/features/search/search"
import { SearchForm } from '@features/search';
import { PopularCategories } from './organisms/popular-categories/popular-categories';
import { Advantages } from '@features/advantages';

export const MainPage = () => {
    return (
        <div className="max-w-4xl pt-20 m-auto">
            <SearchForm />
            <PopularCategories />
            <Advantages />
        </div>
    );
};
