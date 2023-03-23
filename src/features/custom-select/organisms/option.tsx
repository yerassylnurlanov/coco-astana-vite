import arrow from '@assets/images/icons/arrow-down.svg';
import { FC } from 'react';

export const Option: FC<ComponentProps> = ({
    children,
    isVisible,
    variant,
    optionsLength,
    onSelect
}) => {
    return (
        <div
            onClick={() => optionsLength && onSelect()}
            className={`flex items-center justify-between relative py-2 pl-2  cursor-pointer   ${
                variant === 'selected'
                    ? 'font-black border-2 border-gray-300 bg-white  rounded'
                    : ' text-gray-500 hover:text-white hover:bg-blue-500'
            }`}
        >
            <div className="mr-10 "> {children} </div>
            {variant === 'selected' && optionsLength && (
                <div className="absolute top-0 right-0  flex h-full items-center ">
                    <img
                        className={`${
                            isVisible ? 'rotate-180' : 'rotate-0'
                        } transition w-5 h-3 mr-2 mt-1  hover:opacity-50`}
                        src={arrow}
                        alt="Arrow icon"
                    />
                </div>
            )}
        </div>
    );
};

type Variant = 'selected' | 'default';

interface ComponentProps {
    isVisible?: boolean;
    onSelect: () => void;
    variant?: Variant;
    optionsLength: number;
    children: string;
}
