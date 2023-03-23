import { FC } from 'react';
import { Link } from 'react-router-dom';

export const CategoryCard: FC<ComponentProps> = ({ id, icon, title }) => {
    return (
        <div className="rounded-lg flex flex-3 md:flex-auto">
            <Link
                to={`/categories/${id}`}
                className="inline-block w-full h-full md:w-auto"
            >
                <div className="rounded-lg p-2 cursor-pointer inline-block bg-gray-100 h-[120px] md:h-[90%] w-full">
                    <img
                        src={icon}
                        className="relative m-auto md:h-[8rem] md:w-[8rem] h-full "
                        alt="icon"
                    />
                </div>
                <div className="mt-2 text-center">
                    <p>{title}</p>
                </div>
            </Link>
        </div>
    );
};

interface ComponentProps {
    id: number;
    icon: string;
    title: string;
}
