import logo from '@assets/images/header/logo.png';
import { FC } from 'react';
export const AdvantageCard: FC<ComponentProps> = ({
    data: { bgColor, textColor, title, text }
}) => {
    return (
        <div
            className={`${bgColor} ${textColor} w-full h-40 p-5 rounded-lg md:basis-[24%]`}
        >
            <div className="flex h-full gap-2 justify-between rounded-lg border border-solid border-black">
                <div className="w-full flex flex-col justify-center text-center">
                    <h1 className="text-lg whitespace-nowrap">{title}</h1>
                    <p className="mt-1">{text}</p>
                </div>
                {/* <div className="flex flex-col justify-center basis-4/12 items-center mr-2">
                    <img src={logo} className="h-[50%]" alt="" />
                </div> */}
            </div>
        </div>
    );
};
interface ComponentProps {
    data: { bgColor: string; textColor: string; title: string; text: string };
}
