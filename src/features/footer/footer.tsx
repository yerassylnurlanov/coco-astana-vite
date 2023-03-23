import React from 'react';
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaWhatsapp
} from 'react-icons/fa';
import {
    AiOutlineWhatsApp,
    AiOutlineInfoCircle,
    AiFillQuestionCircle
} from 'react-icons/ai';
import { FiHelpCircle, FiShoppingBag, FiTruck } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { BsFillFileEarmarkRuledFill, BsInfo } from 'react-icons/bs';
import { MdPayment, MdCleanHands } from 'react-icons/md';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-200 py-2 px-2 sm:px-6 lg:px-8 pb-20 md:pb-8 pt-5 text-[10px]">
            <div className="flex flex-col">
                <div className="flex flex-row justify-center gap-2">
                    <div className="flex gap-2  text-right items-center">
                        <AiOutlineWhatsApp size={20} />
                    </div>
                    <div className="flex gap-2  text-right items-center">
                        <FaInstagram size={20} />
                    </div>
                </div>
                <div className="flex gap-4 flex-wrap justify-center mt-4">
                    <Link
                        to="/payment"
                        className="flex gap-2 text-gray-900 hover:text-gray-600  "
                    >
                        {/* <BsFillFileEarmarkRuledFill
                            size={16}
                            className="text-gray-600 mb-1 "
                        /> */}
                        Правила аренды
                    </Link>
                    <Link
                        to="/payment"
                        className="flex gap-2 text-gray-900 hover:text-gray-600"
                    >
                        {/* <FiTruck className="text-gray-600 mb-1" size={20} /> */}
                        Оплата и доставка
                    </Link>
                    <Link
                        to="/payment"
                        className="flex gap-2 text-gray-900 hover:text-gray-600 "
                    >
                        {/* <MdCleanHands
                            size={16}
                            className="text-gray-600 mb-1"
                        /> */}
                        Гарантия чистоты
                    </Link>
                    <Link
                        to="/about-us"
                        className="flex gap-2 text-gray-900 hover:text-gray-600 "
                    >
                        {/* <AiOutlineInfoCircle
                            size={16}
                            className="text-gray-600 mb-1"
                        /> */}
                        О нас
                    </Link>
                </div>
            </div>
            {/* <div className="flex justify-between">
                <div className="flex justify-between gap-2 flex-col">
                    <div className="flex flex-col   sm:w-auto">
                        <Link
                            to="/rent"
                            className="flex gap-2 text-gray-900 hover:text-gray-600 "
                        >
                            <BsFillGeoAltFill
                                size={16}
                                className="text-gray-600 mb-1"
                            />
                            Адрес
                        </Link>
                    </div>
                    <div className="flex flex-col  sm:w-auto">
                        <Link
                            to="/payment"
                            className="flex gap-2 text-gray-900 hover:text-gray-600 "
                        >
                            <MdPayment
                                size={16}
                                className="text-gray-600 mb-1"
                            />
                            Оплата
                        </Link>
                    </div>
                    <div className="flex flex-col sm:w-auto">
                        <Link
                            to="/delivery"
                            className="flex gap-2 text-gray-900 hover:text-gray-600 "
                        >
                            <FiTruck className="text-gray-600 mb-1" size={20} />
                            Доставка
                        </Link>
                    </div>
                    <div className="flex flex-col   sm:w-auto">
                        <Link
                            to="/about"
                            className="flex gap-2 text-gray-900 hover:text-gray-600 "
                        >
                            <BsInfo size={20} className="text-gray-600 mb-1" />О
                            нас
                        </Link>
                    </div>
                </div>
                <div className="flex justify-between flex-col items-end">
                    {/* <div className="flex gap-2 ">
                        <span className=" text-gray-600">Delivery</span>
                        <FiTruck className="text-gray-600 mb-1" size={20} />
                    </div>
                    <div className="flex gap-2 items-center">
                        <span className=" text-gray-600">Аренда</span>
                        <FiShoppingBag
                            className="text-gray-600 mb-1"
                            size={16}
                        />
                    </div>
                    <div className="flex gap-2  text-right items-center">
                        <span className=" text-gray-600">Помощь</span>
                        <FiHelpCircle
                            className="text-gray-600 mb-1"
                            size={16}
                        />
                    </div>
                    <div className="flex gap-2  text-right items-center">
                        <span className=" text-gray-600">Whatsapp</span>
                        <AiOutlineWhatsApp className="text-2xl m-auto " />
                    </div>
                    <div className="flex gap-2  text-right items-center">
                        <span className=" text-gray-600 ">
                            Instagram
                        </span>
                        <FaInstagram className="text-2xl m-auto " />
                    </div>
                </div>
            </div> */}
        </footer>
    );
};
