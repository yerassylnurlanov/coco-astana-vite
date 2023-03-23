import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from 'src/store/store';
import logo from '@assets/images/logo-2.svg';

export const Header: React.FC = () => {
    const basket = useSelector((state: RootState) => state.basket.items);

    return (
        <header className="hidden md:flex w-full">
            <nav className="container flex flex-row  items-center justify-between p-4 pb-0 pt-2 bg-white m-auto">
                <div className="flex flex-wrap items-center w-full">
                    <Link
                        to="/"
                        className={`px-0 mr-auto py-0 font-medium text-gray-800 hover:text-blue-500 ${
                            window.location.pathname === '/'
                                ? 'text-blue-500'
                                : ''
                        }`}
                    >
                        <img className="h-[70px]" src={logo} alt="logo" />
                    </Link>
                    {/* <Link
                    to="/"
                    className={`px-4 py-2 mr-4 font-medium text-gray-800 hover:text-blue-500 ${
                        window.location.pathname === '/'
                            ? 'text-blue-500'
                            : ''
                    }`}
                >
                    Главная
                </Link> */}
                    <Link
                        to="/about-us"
                        className={`px-4 py-2 mr-4 font-medium text-gray-800 hover:text-blue-500 ${
                            window.location.pathname === '/about-us'
                                ? 'text-blue-500'
                                : ''
                        }`}
                    >
                        О нас
                    </Link>
                    <Link
                        to="/contacts"
                        className={`px-4 py-2 mr-4 font-medium text-gray-800 hover:text-blue-500 ${
                            window.location.pathname === '/contacts'
                                ? 'text-blue-500'
                                : ''
                        }`}
                    >
                        Контакты
                    </Link>
                    <Link
                        to="/categories"
                        className={`px-4 py-2 mr-4 font-medium text-gray-800 hover:text-blue-500 ${
                            window.location.pathname.includes('categories')
                                ? 'text-blue-500'
                                : ''
                        }`}
                    >
                        Категории
                    </Link>
                    <Link
                        to="/basket"
                        className="px-4 py-2 font-medium text-gray-800 hover:text-blue-500"
                    >
                        <i className="fas fa-shopping-basket mr-2" />
                        Корзина ({basket.length})
                    </Link>
                </div>
            </nav>
        </header>
    );
};
