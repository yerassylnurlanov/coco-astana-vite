import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import logo from '@assets/images/logo-1.svg';
import { Link } from 'react-router-dom';

export const MobileHeader: React.FC = () => {
    return (
        <header className="bg-blue-500 z-10 shadow-md fixed top-0 left-0 w-screen h-16 flex justify-between items-center pl-0 pr-4 md:hidden">
            <div className="text-gray-500 w-full flex items-center justify-between h-full">
                <div className="w-2/3 h-full p-1 items-center flex gap-2">
                    <Link to={'/'} className={'h-full'}>
                        <img src={logo} alt="coco-baby" className="h-full " />
                    </Link>
                    <p className="text-white text-xl">COCO-BABY</p>
                </div>
                <div className="flex items-center">
                    <FaMapMarkerAlt className="text-white" />
                    <p className="text-xl ml-1 text-white">Астана</p>
                </div>
            </div>
        </header>
    );
};
