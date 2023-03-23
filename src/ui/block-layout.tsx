import { FC } from 'react';
import { Title } from './title';

export const BlockLayout: FC<BlockLayoutProps> = ({ title, children }) => {
    return (
        <div className="w-full mt-10 pt-10 md:m-0">
            {title && <Title>{title}</Title>}
            {children}
        </div>
    );
};

interface BlockLayoutProps {
    title?: string;
    children: any;
}
