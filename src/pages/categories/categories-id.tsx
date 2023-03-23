import React, { useEffect } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import toys from '@assets/images/categories/toys.svg';
import swing from '@assets/images/items/swing.png';
import { BlockLayout } from '@ui/block-layout';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '@store/store';
import { itemsActions } from '@store/items-slice';
import { IoMdArrowBack } from 'react-icons/io';

const { getItemsByCategoryId } = itemsActions;

export const CategoriesIdPage = () => {
    const { category_id } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getItemsByCategoryId({ category_id: category_id || '' }));
    }, []);
    const { currentItemsByCategoryId, currentCategory } = useSelector(
        ({
            items: { currentItemsByCategoryId, currentCategory }
        }: AppState) => ({ currentItemsByCategoryId, currentCategory })
    );
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
        // handle go back
    };
    return (
        <div className="md:container md:m-auto mt-10 pt-6 bg-white px-2">
            <div className="flex justify-between items-center px-2">
                <button
                    onClick={goBack}
                    className="text-blue-500 flex gap-2 items-center py-4"
                >
                    <IoMdArrowBack size={24} />
                    <p>Назад</p>
                </button>
            </div>
            <h2 className="text-xl font-bold mb-4">{currentCategory.name}</h2>
            <div className="flex flex-wrap mt-5 gap-4 md:justify-center">
                {currentItemsByCategoryId.map((item, index) => (
                    <div
                        key={index}
                        className="border-2 p-2  rounded flex-2 md:flex-5 2xl:flex-auto md:space-between md:p-2 cursor-pointer hover:border-blue-500 md:inline-block"
                    >
                        <Link
                            to={`/categories/1/item/${item.id}`}
                            className="flex h-full flex-col justify-end"
                        >
                            <div className="p-2 min-h-[200px]">
                                <img
                                    src={getImageUrl(item.images[0])}
                                    alt={item.name}
                                    className="w-full h-auto"
                                />
                            </div>

                            <div>
                                <p className="text-md mt-2 text-center text-bold">
                                    {item.name}
                                </p>
                                <p
                                    className={`text-right hidden mt-2 md:block text-[10px] mb-2 ${
                                        item.available
                                            ? 'text-green-500'
                                            : 'text-red-500'
                                    }`}
                                >
                                    {item.available
                                        ? 'Доступно'
                                        : 'Нет в наличии'}
                                </p>
                                <div className="flex">
                                    <p className="text-md">
                                        <strong className="text-green-500">
                                            {item.cost / 5}
                                        </strong>{' '}
                                        ₸/неделя
                                    </p>
                                </div>
                                <button className="hidden md:block m-auto bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:border-2 ">
                                    Арендовать
                                </button>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const getImageUrl = (name: string) => {
    return new URL(`../../assets/images/items/${name}`, import.meta.url).href;
};
