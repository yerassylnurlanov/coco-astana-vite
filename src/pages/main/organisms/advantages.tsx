import { AdvantageCard } from '@ui/advantage-card';
import { BlockLayout } from '@ui/block-layout';

const data = [
    {
        bgColor: 'bg-[#F8ECD4]',
        textColor: 'text-[#A89265]',
        title: 'Гарантия качества',
        text: 'Все товары в хорошем состоянии'
    },
    {
        bgColor: 'bg-[#BFD2BF]',
        textColor: 'text-[#606960]',
        title: 'Без залога',
        text: 'Никаких залогов'
    },
    {
        bgColor: 'bg-[#F5C05B]',
        textColor: 'text-[#9A742C]',
        title: 'Безопасность',
        text: 'Все товары прохдят тщательную чистку'
    },
    {
        bgColor: 'bg-[#F19C88]',
        textColor: 'text-[#8D3F2D]',
        title: 'Быстрая доставка',
        text: 'Доставим в течение часа'
    }
];

export const AdvantagesBlock = () => {
    return (
        <BlockLayout title="Наши преимущества">
            <div className="mt-5 flex flex-wrap justify-between">
                {data.map((data, index) => (
                    <AdvantageCard data={data} key={index} />
                ))}
            </div>
        </BlockLayout>
    );
};
