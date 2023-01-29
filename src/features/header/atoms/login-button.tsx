import login from '@assets/images/header/login.svg';

export const LoginButton = () => {
    return (
        <a className="flex mr-5 items-center flex-nowrap whitespace-nowrap cursor-pointer">
            <img src={login} alt="call" className="max-w-full max-h-5" />
            <p className="ml-2">Войти</p>
        </a>
    );
};
