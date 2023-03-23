import { FC } from 'react';

export const Title: FC<ComponentProps> = ({ children }) => {
    return (
        <div className="w-full">
            <h1 className="text-xl md:text-left md:text-2xl text-gray-500 font-bold">
                {children}
            </h1>
        </div>
    );
};

interface ComponentProps {
    children: string;
}
