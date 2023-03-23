import React from 'react';
import { FaHome, FaShoppingCart } from 'react-icons/fa';
import { TbListSearch } from 'react-icons/tb';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '@store/store';

export const BottomNavbar: React.FC = () => {
    const { items } = useSelector(({ basket: { items } }: RootState) => ({
        items
    }));
    return (
        <nav className="fixed md:hidden shadow-md bottom-0 left-0 w-screen h-16 bg-blue-500 border-t  flex justify-between items-center ">
            <Link
                to="/"
                className={`flex items-center w-full text-center h-full focus:outline-none ${
                    window.location.pathname === '/' ? 'bg-white' : ''
                } `}
            >
                <FaHome
                    className={`text-2xl m-auto text-white ${
                        window.location.pathname === '/' ? 'text-blue-500' : ''
                    }`}
                />
            </Link>
            <Link
                to="/categories"
                className={`flex items-center w-full text-center h-full focus:outline-none ${
                    window.location.pathname.includes('/categories')
                        ? 'bg-white'
                        : ''
                } `}
            >
                <TbListSearch
                    className={`text-2xl m-auto text-white ${
                        window.location.pathname.includes('/categories')
                            ? 'text-blue-500'
                            : ''
                    }`}
                />
            </Link>
            <Link
                to="/basket"
                className={`flex items-center relative w-full text-center h-full focus:outline-none ${
                    window.location.pathname === '/basket' ? 'bg-white' : ''
                } `}
            >
                <FaShoppingCart
                    className={`text-2xl m-auto text-white ${
                        window.location.pathname === '/basket'
                            ? 'text-blue-500'
                            : ''
                    }`}
                />
                {items.length > 0 && (
                    <span
                        className={`absolute top-1/4 right-3 text-white  text-lg ${
                            window.location.pathname === '/basket'
                                ? 'text-blue-500'
                                : ''
                        }`}
                    >
                        ({items.length})
                    </span>
                )}
            </Link>
            <a
                href="https://wa.me/77775955979"
                target="_blank"
                className={`flex items-center w-full text-center h-full focus:outline-none ${
                    window.location.pathname === '' ? 'bg-white' : ''
                } `}
            >
                <AiOutlineWhatsApp className="text-2xl m-auto text-white" />
            </a>
        </nav>
    );
};
