import basket from '@/assets/images/header/basket.svg';
export const Basket = ()=>{
    return(
        <div className='p-2 flex ml-auto m-3 items-center flex-nowrap whitespace-nowrap cursor-pointer'>
            <img src={basket} className="max-w-full max-h-full" alt='basket' />
            <p className='m-3'>Корзина</p>
        </div>
    )
}
