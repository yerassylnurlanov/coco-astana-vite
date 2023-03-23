import React, { useEffect } from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import toys from '@assets/images/categories/toys.svg';
import swing from '@assets/images/items/swing.png';
import { BlockLayout } from '@ui/block-layout';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '@store/store';
import { itemsActions } from '@store/items-slice';

const { setNewItems } = itemsActions;
const ItemList: React.FC = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setNewItems());
    }, []);
    const newItems = useSelector(
        ({ items: { newItems } }: AppState) => newItems
    );
    return (
        <BlockLayout title="Новинки">
            <div className="flex flex-wrap mt-5 gap-4">
                {newItems.slice(0, 4).map((item, index) => (
                    <div
                        key={index}
                        className="border-2 p-2  rounded flex-2 md:flex-5 2xl:flex-auto md:space-between md:p-2 cursor-pointer hover:border-blue-500 flex flex-col justify-between"
                    >
                        <Link
                            className="h-full flex flex-col justify-between"
                            to={`/categories/1/item/${item.id}`}
                        >
                            <div className="p-2 flex flex-col justify-end h-full">
                                <img
                                    src={
                                        item.images.length === 0
                                            ? 'https://via.placeholder.com/200x200'
                                            : getImageUrl(item.images[0])
                                    }
                                    alt={item.name}
                                    className="w-full h-auto"
                                />
                                <p className="text-md mt-2 text-center">
                                    {item.name}
                                </p>
                            </div>

                            <div>
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
                                    <p>
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
        </BlockLayout>
    );
};

export default ItemList;
export const getImageUrl = (name: string) => {
    return new URL(`../../../assets/images/items/${name}`, import.meta.url)
        .href;
};
