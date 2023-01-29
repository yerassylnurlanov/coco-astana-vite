import geo from '@assets/images/header/geo.svg';

export const Address = () => {
    return (
        <a className="p-2 flex m-5 items-center flex-nowrap whitespace-nowrap cursor-pointer">
            <img src={geo} alt="call" className="max-w-full max-h-full" />
            <p className="ml-2">Астана</p>
        </a>
    );
};
