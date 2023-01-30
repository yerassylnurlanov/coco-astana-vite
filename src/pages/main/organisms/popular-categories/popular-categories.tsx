import { Title } from '@ui/title';
import { CategoryCard } from './category-box/category-card';
import trampoline from '@assets/images/categories/trampoline.svg';
import slide from '@assets/images/categories/slide.svg';
import swimmingPool from '@assets/images/categories/swimming-pool.svg';
import swing from '@assets/images/categories/swing.svg';
import toy from '@assets/images/categories/toy-teddy-bear.svg';
import { Avatar, Card } from 'antd';

const data = [
    {
        icon: trampoline,
        title: 'Батуты'
    },
    {
        icon: slide,
        title: 'Горки'
    },
    {
        icon: swimmingPool,
        title: 'Бассейны'
    },
    {
        icon: swing,
        title: 'Качели'
    },
    {
        icon: toy,
        title: 'Игрушки'
    }
];

export const PopularCategories = () => {
    return (
        <div className="w-full mt-10 text-center">
            <Title>Категории</Title>
            <ul className="flex mt-5 justify-between ">
                {data.map(({ icon, title }) => (
                    <Card
                        style={{
                            width: 160,
                            padding: 20
                        }}
                        hoverable
                        cover={<img alt="example" src={icon} />}
                    >
                        <p className="text-center">{title}</p>
                    </Card>
                ))}
            </ul>
        </div>
    );
};
