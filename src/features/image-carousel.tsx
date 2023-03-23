import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';

interface ComponentProps {
    images: string[];
}

export const ImageCarousel: FC<ComponentProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings} arrows={false}>
            {images.map((image, index) => (
                <div className="inline-block" key={index}>
                    <img
                        src={getImageUrl(image)}
                        alt={`Image ${index}`}
                        className="w-full"
                    />
                </div>
            ))}
        </Slider>
    );
};
export const getImageUrl = (name: string) => {
    return new URL(`../assets/images/items/${name}`, import.meta.url).href;
};
