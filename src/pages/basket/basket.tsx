import React, { useEffect, useState } from 'react';
import baby from '@assets/images/categories/baby.svg';
import { Button, Divider } from 'antd';
import { addItem, basketActions, removeItem } from '../../store/basketSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppState, RootState } from 'src/store/store';
import { CustomSelect } from '@features/custom-select';
import { BsTrash } from 'react-icons/bs';
import { OrderPage } from './order/order';
import { getRentCost } from '@features/lib';

const { updateRentDays, setSum, setOneClickRent } = basketActions;

export const BasketPage = () => {
    const [order, setOrder] = useState<boolean>(false);
    const { items, sum, oneClickRent } = useSelector(
        ({ basket: { items, sum, oneClickRent } }: RootState) => ({
            items,
            sum,
            oneClickRent
        })
    );

    const dispatch = useDispatch();
    const handleRemoveItem = (id: number) => {
        dispatch(removeItem(id));
    };
    useEffect(() => {
        dispatch(
            setSum({ sum: items.reduce((acc, cur) => acc + cur.rentPrice, 0) })
        );
        return () => {
            dispatch(setOneClickRent(false));
        };
    }, [items]);

    return order || oneClickRent ? (
        <OrderPage goToBasket={() => setOrder(false)} />
    ) : (
        <div className="md:container md:m-auto mt-10 pt-6 bg-white px-2">
            <h2 className="text-xl font-bold mb-4">Корзина</h2>

            {items.length === 0 ? (
                <div>Корзина пуста</div>
            ) : (
                items.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="mb-4 p-2 bg-white border-2  rounded-lg"
                        >
                            <div className="flex flex-row md:flex-row md:justify-between gap-2">
                                <div className="w-1/3">
                                    <img
                                        src={getImageUrl(item.image)}
                                        alt={item.name}
                                        className="w-32 mt-2"
                                    />
                                </div>
                                <div className="text-right w-full">
                                    <h3 className="text-lg mb-2 font-bold text-center">
                                        {item.name}
                                    </h3>
                                    <CustomSelect
                                        name="select"
                                        placeholder="Выберите срок"
                                        defaulValue={item.rentDays}
                                        options={options}
                                        onSelectChange={(e) => {
                                            dispatch(
                                                updateRentDays({
                                                    id: item.id,
                                                    days: e.value
                                                })
                                            );
                                        }}
                                    />

                                    {/* <p className="text-center text-lg text-blue-400 mt-5">
                            {item.price * item.quantity} ₸
                        </p> */}
                                </div>
                                <div>
                                    <button
                                        className="mt-2"
                                        onClick={() =>
                                            handleRemoveItem(item.id)
                                        }
                                    >
                                        <BsTrash
                                            size={22}
                                            className="text-red-500"
                                        />
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })
            )}
            {items.length > 0 && (
                <>
                    <div className="mb-4">
                        <h3 className="text-lg font-bold">
                            Общая сумма: {sum} T
                        </h3>
                    </div>
                    <div className="text-right">
                        <button
                            onClick={() => setOrder(true)}
                            type="submit"
                            className="w-full bg-blue-400 text-white py-2 rounded hover:bg-blue-500"
                        >
                            Оформить
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

const options: Option[] = [
    {
        name: '1 день',
        value: 1
    },
    {
        name: '2 дня',
        value: 2
    },
    {
        name: '3 дня',
        value: 3
    },
    {
        name: '4 дня',
        value: 4
    },
    {
        name: '5 дней',
        value: 5
    },
    {
        name: '6 дней',
        value: 6
    },
    {
        name: '7 дней',
        value: 7
    },
    {
        name: '8 дней',
        value: 8
    },
    {
        name: '9 дней',
        value: 9
    },
    {
        name: '10 дней',
        value: 10
    },
    {
        name: '11 дней',
        value: 11
    },
    {
        name: '12 дней',
        value: 12
    },
    {
        name: '13 дней',
        value: 13
    },
    {
        name: '14 дней',
        value: 14
    },
    {
        name: '15 дней',
        value: 15
    },
    {
        name: '16 дней',
        value: 16
    },
    {
        name: '17 дней',
        value: 17
    },
    {
        name: '18 дней',
        value: 18
    },
    {
        name: '19 дней',
        value: 19
    },
    {
        name: '20 дней',
        value: 20
    },
    {
        name: '21 дней',
        value: 21
    },
    {
        name: '22 дней',
        value: 22
    },
    {
        name: '23 дней',
        value: 23
    },
    {
        name: '24 дней',
        value: 24
    },
    {
        name: '25 дней',
        value: 25
    },
    {
        name: '26 дней',
        value: 26
    },
    {
        name: '27 дней',
        value: 27
    },
    {
        name: '28 дней',
        value: 28
    },
    {
        name: '29 дней',
        value: 29
    },
    {
        name: '30 дней',
        value: 30
    }
];
interface Option {
    name: string;
    value: number;
}

export const getImageUrl = (name: string) => {
    return new URL(`../../assets/images/items/${name}`, import.meta.url).href;
};
