import baby from '@/assets/images/categories/baby.svg'
export const CategoryBox = ()=>{
    return(
        <div className="flex flex-col items-center cursor-pointer hover:bg-gray-100 p-2 rounded">
            <img src={baby} alt='image' className='w-3/5' />
            <p>Категория 1</p>
        </div>
    )
}
