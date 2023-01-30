import React from 'react';

interface Item {
    id: number;
    name: string;
    price: number;
    image: string;
}

const Items: React.FC = () => {
    const items: Item[] = [
        {
            id: 1,
            name: 'Item 1',
            price: 19.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 2,
            name: 'Item 2',
            price: 29.99,
            image: 'https://via.placeholder.com/150'
        },
        {
            id: 3,
            name: 'Item 3',
            price: 39.99,
            image: 'https://via.placeholder.com/150'
        }
    ];

    return (
        <div className="max-w-4xl pt-20 m-auto">
            <div className="flex flex-col items-center justify-center p-10">
                <h1 className="text-2xl font-bold">Items</h1>
                <div className="grid grid-cols-3 gap-10">
                    {items.map((item) => (
                        <div key={item.id} className="relative p-5 bg-white">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-48 object-cover"
                            />
                            <h2 className="text-lg font-bold mt-2">
                                {item.name}
                            </h2>
                            <p className="text-gray-700">${item.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Items;
