import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@features/store';
import {
    addToBasket,
    removeFromBasket,
    updateBasketItemQuantity
} from './basket-slice';

const Basket: React.FC = () => {
    const items = useSelector((state: RootState) => state.basket.items);
    const dispatch = useDispatch();

    const handleAddItem = (item: string) => {
        dispatch(addToBasket(item));
    };

    const handleRemoveItem = (item: string) => {
        dispatch(removeFromBasket(item));
    };

    const handleUpdateQuantity = (item: string, quantity: number) => {
        dispatch(updateBasketItemQuantity(item, quantity));
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-2xl font-bold">Basket</h1>
            <table className="w-full mt-10 text-gray-700">
                <thead>
                    <tr>
                        <th className="w-1/4 p-2">Product</th>
                        <th className="w-1/4 p-2">Price</th>
                        <th className="w-1/4 p-2">Quantity</th>
                        <th className="w-1/4 p-2"></th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((item, index) => (
                        <tr key={index}>
                            <td className="w-1/4 p-2">{item.name}</td>
                            <td className="w-1/4 p-2">${item.price}</td>
                            <td className="w-1/4 p-2">
                                <input
                                    type="number"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleUpdateQuantity(
                                            item.name,
                                            parseInt(e.target.value)
                                        )
                                    }
                                />
                            </td>
                            <td className="w-1/4 p-2">
                                <button
                                    className="bg-red-500 text-white p-2 rounded"
                                    onClick={() => handleRemoveItem(item.name)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="mt-10">
                <input
                    type="text"
                    className="bg-gray-200 p-2 rounded w-64"
                    placeholder="Add item"
                />
                <button
                    className="bg-green-500 text-white p-2 rounded ml-2"
                    onClick={() =>
                        handleAddItem({
                            name: 'Product 1',
                            price: 10,
                            quantity: 1
                        })
                    }
                >
                    Add to basket
                </button>
            </div>
        </div>
    );
};

export default Basket;
