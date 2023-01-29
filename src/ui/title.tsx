import { FC } from 'react';

export const Title: FC<ComponentProps> = ({ children }) => {
    return (
        <div className="w-full text-center">
            <h1 className="text-2xl font-bold">{children}</h1>
        </div>
    );
};

interface ComponentProps {
    children: string;
}
