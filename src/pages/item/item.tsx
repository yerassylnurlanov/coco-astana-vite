import { useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { BsFillHeartFill } from 'react-icons/bs';
import { ImageCarousel } from '@features/image-carousel';
import { GiCheckMark } from 'react-icons/gi';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState, useAppDispatch } from '@store/store';
import { getRentCost } from '@features/lib';
import { basketActions } from '@store/basketSlice';
import { itemsActions } from '@store/items-slice';
import { notificationActions } from '@features/notification/notification-slice';

const { addItem, oneClickRent, setOneClickRent, cleanBasket } = basketActions;
const { toggleBasketItem, setCurrentItem } = itemsActions;
export const ItemPage = () => {
    const { item_id } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(setCurrentItem({ id: item_id !== undefined ? item_id : '1' }));
    }, []);
    const currentItem = useSelector(
        ({ items: { currentItem } }: AppState) => currentItem
    );

    const [rentCost, setRentCost] = useState(0);

    const [rentDays, setRentDays] = useState(1);
    useEffect(() => {
        setRentCost(getRentCost({ cost: currentItem.cost, day: rentDays }));
    }, [rentDays]);
    const [rentOptions, setRentOptions] = useState<
        { id: number; days: number; cost: number; isActive: boolean }[]
    >([]);

    useEffect(() => {
        setRentOptions([
            {
                id: 1,
                days: 1,
                cost: getRentCost({ cost: currentItem.cost, day: 1 }),
                isActive: true
            },
            {
                id: 2,
                days: 7,
                cost: getRentCost({ cost: currentItem.cost, day: 7 }),
                isActive: false
            },
            {
                id: 3,
                days: 30,
                cost: getRentCost({ cost: currentItem.cost, day: 30 }),
                isActive: false
            }
        ]);
    }, [currentItem]);

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
        // handle go back
    };

    const oneClickBuy = () => {
        dispatch(cleanBasket());
        dispatch(
            oneClickRent({
                id: currentItem.id,
                name: currentItem.name,
                cost: currentItem.cost,
                rentPrice: getRentCost({
                    cost: currentItem.cost,
                    day: rentDays
                }),
                image: currentItem.images[0],
                rentDays
            })
        );
        navigate('/basket');
        dispatch(setOneClickRent(true));

        // handle add to favorites
    };
    const addToCart = () => {
        dispatch(
            addItem({
                id: currentItem.id,
                name: currentItem.name,
                cost: currentItem.cost,
                rentPrice: getRentCost({
                    cost: currentItem.cost,
                    day: rentDays
                }),
                image: currentItem.images[0],
                rentDays
            })
        );
        dispatch(
            notificationActions.setNotificationMessage({
                type: 'success',
                message: 'Товар успешно добавлен'
            })
        );
        dispatch(toggleBasketItem({ id: currentItem.id, value: true }));
        // handle add to cart
    };

    //   const handleImageClick = (imageUrl: string) => {
    //     setSelectedImage(imageUrl);
    //   };

    const setDays = (id: number) => {
        const newRentOptions = rentOptions.map((option) => {
            if (option.id === id) {
                return { ...option, isActive: true };
            } else {
                return { ...option, isActive: false };
            }
        });
        const result = rentOptions.find((option) => option.id === id) || {
            days: 1
        };
        setRentOptions(newRentOptions);
        setRentDays(result.days);
    };

    const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newRentDays = parseInt(event.target.value);
        setRentDays(newRentDays);
    };

    return (
        <div className="md:container md:m-auto mt-10 pt-6 justify-center">
            <div className="flex justify-between items-center px-2">
                <button
                    onClick={goBack}
                    className="text-blue-500 flex gap-2 items-center py-4"
                >
                    <IoMdArrowBack size={24} />
                    <p>Назад</p>
                </button>
            </div>
            <div className="md:flex gap-4 md:justify-center">
                <div className="w-screen md:w-96 ">
                    <ImageCarousel images={currentItem.images} />
                </div>
                <div className="px-2 mt-8">
                    <div className="">
                        <div className="flex items-center mb-2 justify-between">
                            <h2 className="text-2xl font-semibold mb-2 w-full">
                                {currentItem.name}
                            </h2>
                            <div className="flex gap-2 mt-2 flex-wrap">
                                {currentItem.available && (
                                    <p className="flex gap-1 items-center px-2 py-1 bg-green-500 rounded-md text-white text-md">
                                        <GiCheckMark /> Доступно
                                    </p>
                                )}
                                {currentItem.cleaned && (
                                    <p className="flex gap-1 items-center px-2 py-1 bg-blue-500 rounded-md text-white text-md">
                                        <GiCheckMark
                                            className="text-white"
                                            size={16}
                                        />
                                        Очищено
                                    </p>
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col my-4">
                            <div>
                                <div className="flex justify-between mb-4">
                                    {rentOptions.map((option) => (
                                        <button
                                            className={`flex flex-col justify-center p-2 flex-3 border-2 border-yellow-400 rounded ${
                                                option.isActive &&
                                                'bg-yellow-400 text-white'
                                            }`}
                                            onClick={() => setDays(option.id)}
                                            key={option.days}
                                        >
                                            <p className="w-full mb-2">
                                                {option.days}
                                                {option.days > 1
                                                    ? ' дней'
                                                    : ' день'}
                                            </p>
                                            <p className="w-full text-xl">
                                                {option.cost} ₸
                                            </p>
                                        </button>
                                    ))}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="customRange">
                                        или Выберите самостоятельно:
                                    </label>
                                    <div className="flex gap-4 ">
                                        <div className="w-9/12 flex flex-row">
                                            <input
                                                type="range"
                                                min="1"
                                                max="30"
                                                step="1"
                                                value={rentDays}
                                                onChange={handleSliderChange}
                                                className="slider w-full inline-block"
                                                id="customRange"
                                                list="tickmarks"
                                            />
                                            <div className="w-7/12">
                                                <p className="text-right underline texl-lg mt-2">
                                                    {rentDays}{' '}
                                                    {rentDays > 1
                                                        ? 'дней'
                                                        : 'день'}{' '}
                                                </p>
                                                <p className="text-right text-yellow-400 text-lg font-black whitespace-nowrap">
                                                    <strong>
                                                        {Math.round(
                                                            rentCost / rentDays
                                                        ) + ' тг/день'}
                                                    </strong>
                                                </p>
                                            </div>
                                        </div>
                                        <p className="flex items-center text-xl w-3/12">
                                            {rentCost} T
                                        </p>
                                    </div>

                                    <datalist id="tickmarks">
                                        <option value="1">1</option>
                                        <option value="5">5</option>
                                        <option value="10">10</option>
                                        <option value="15">15</option>
                                        <option value="20">20</option>
                                        <option value="25">25</option>
                                        <option value="30">30</option>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-1 flex-col">
                            <div className="mb-2">
                                <h3 className="text-lg font-semibold mb-2">
                                    Описание
                                </h3>
                                <ul className="text-md">
                                    {currentItem.description}
                                </ul>
                            </div>
                            <div className="">
                                <h3 className="text-lg font-semibold mb-2">
                                    Характеристики
                                </h3>
                                <ul className="text-md whitespace-pre-wrap">
                                    {currentItem.characteristics}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between mt-4 gap-2">
                        <button
                            onClick={oneClickBuy}
                            className="w-1/2 bg-green-500 text-white py-2 rounded-md"
                        >
                            Арендовать
                        </button>

                        {currentItem.inBasket ? (
                            <button
                                disabled
                                className="w-1/2 bg-gray-300 text-white py-2 rounded-md"
                            >
                                Товар в корзине
                            </button>
                        ) : (
                            <button
                                onClick={addToCart}
                                className="w-1/2 bg-blue-500 text-white py-2 rounded-md"
                            >
                                Добавить в корзину
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
