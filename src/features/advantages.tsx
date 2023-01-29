import { Avatar, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import delivery from '@assets/images/advantages/delivery.svg';
import quality from '@assets/images/advantages/quality.svg';
import safety from '@assets/images/advantages/safety.svg';
import noDollars from '@assets/images/advantages/no-dollars.svg';
import { Title } from '@ui/title';

const data = [
    {
        text: 'Быстрая доставка в течение часа',
        image: delivery
    },
    {
        text: 'Все товары в отличном состоянии',
        image: quality
    },
    {
        text: 'Никаких залогов',
        image: noDollars
    },
    {
        text: 'Все товары проходят тщательную чистку',
        image: safety
    }
];
export const Advantages = () => (
    <div className="mt-10 ">
        <Title>Наши преимущества</Title>
        <div className="flex gap-2 mt-10 flex-1 w-full">
            {data.map(({ text, image }) => (
                <Card style={{ width: 250 }}>
                    <Meta
                        description={text}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            textAlign: 'center'
                        }}
                        avatar={<Avatar size={64} src={image} />}
                    />
                </Card>
            ))}
        </div>
    </div>
);
