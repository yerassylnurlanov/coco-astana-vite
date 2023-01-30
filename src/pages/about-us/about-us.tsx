import React from 'react';

const AboutUs: React.FC = () => {
    return (
        <div className="max-w-4xl pt-20 m-auto">
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-2xl font-bold">About Us</h1>
                <div className="w-3/4 mt-10 text-gray-700">
                    <p>
                        We are a team of passionate individuals who love
                        e-commerce and delivering the best shopping experience
                        to our customers. We believe in providing high-quality
                        products, fast and reliable shipping, and excellent
                        customer service.
                    </p>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="About us"
                        className="w-48 h-48 mt-5 mx-auto rounded-full"
                    />
                    <p className="mt-5">
                        Our online shop offers a wide variety of products, from
                        electronics and home goods to fashion and beauty items.
                        Our goal is to make shopping easy, convenient, and
                        enjoyable for everyone.
                    </p>
                    <img
                        src="https://via.placeholder.com/150"
                        alt="About us"
                        className="w-48 h-48 mt-5 mx-auto rounded-full"
                    />
                    <p className="mt-5">
                        Thank you for choosing us as your shopping destination.
                        We look forward to serving you!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
