import phoneIcon from '@/assets/images/header/phone.svg'
export const PhoneNumber = ()=>{

    return(
        <a className='p-2 flex m-5 items-center flex-nowrap whitespace-nowrap cursor-pointer'>
            <img src={phoneIcon} alt='call' className='max-w-full max-h-full'/>
            <p className='ml-2'>+7 704 888 99 00</p>
        </a>
    )
}
