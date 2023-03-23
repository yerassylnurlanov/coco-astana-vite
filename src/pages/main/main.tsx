// import { SearchForm } from "@/features/search/search"
import { SearchForm } from '@features/search';
import { PopularCategories } from './organisms/popular-categories';
import wallpaper from '@assets/images/wallpaper.png';
import { AdvantagesBlock } from './organisms/advantages';
import ItemList from './organisms/new-items';

export const MainPage = () => {
    return (
        <div className="px-5 md:px-0">
            {/* <div className="hidden md:block w-full relative">
                <img src={wallpaper} alt="" />
                <div className="absolute  top-0 left-0 bg-black/10 flex flex-col justify-center items-center w-full h-full md:w-auto md:h-auto md:block md:bg-inherit md:top-1/4 md:left-12">
                    <h1 className="text-xl md:text-4xl text-white">
                        Сервис аренды товаров
                    </h1>
                    <p className="hidden md:inline-block mt-5 text-white text-xl max-w-sm">
                        The quick brown fox jumps over the lazy dog. The quick
                        brown fox jumps over the lazy dog
                    </p>
                    <button className="mt-10 text-xl text-black rounded-full py-4 px-6 text-center bg-[#fdee0c]">
                        Button text
                    </button>
                </div>
            </div> */}

            <div className="container m-auto">
                <PopularCategories />
                <ItemList />
                <div className="hidden md:block">
                    <AdvantagesBlock />
                </div>
            </div>
        </div>
    );
};
