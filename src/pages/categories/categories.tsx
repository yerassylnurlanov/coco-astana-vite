import { SearchForm } from '@features/search';
import { IoMdArrowBack } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { AppState } from '@store/store';
export const CategoriesPage = () => {
    const categories = useSelector(
        ({ items: { categories } }: AppState) => categories
    );
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
        // handle go back
    };
    return (
        <div className="md:container md:m-auto mt-10 pt-6 justify-center">
            <div className="flex justify-between items-center">
                <button
                    onClick={goBack}
                    className="text-blue-500 flex gap-2 items-center py-4"
                >
                    <IoMdArrowBack size={24} />
                    <p>Назад</p>
                </button>
            </div>
            <div className="flex flex-col">
                {categories.map(({ id, name }, index) => (
                    <Link key={index} to={`${id}`} className="inline-block">
                        <div className="flex justify-between px-2 py-4 items-center border-t-2 cursor-pointer">
                            <p className="text-lg">{name}</p>
                            <AiOutlineRight />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};
