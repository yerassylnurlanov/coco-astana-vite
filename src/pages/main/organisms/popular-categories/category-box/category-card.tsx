import baby from '@assets/images/categories/baby.svg';
import { FC } from 'react';
export const CategoryCard: FC<ComponentProps> = ({ icon, title }) => {
    return (
        <div className="flex flex-col items-center cursor-pointer w-25 hover:bg-gray-100 p-2 rounded">
            <img src={icon} alt="image" className="w-full" />
            <p>{title}</p>
        </div>
    );
};

interface ComponentProps {
    icon: string;
    title: string;
}
