import { BlockLayout } from '@ui/block-layout';
import { Title } from '@ui/title';

export const AboutUsPage = () => {
    return (
        <BlockLayout title="">
            <div className="container m-auto bg-white px-4">
                <Title>О нас</Title>
                <p className="my-5">
                    Мы компания по прокату детских игрушек, расположенная в
                    Астане. Наша цель — предоставить семьям удобное и доступное
                    решение для доступа к широкому ассортименту игрушек, с
                    которыми их дети могут играть.
                </p>
                <Title>Наш взгляд</Title>
                <p className="my-5">
                    Сделать игрушки доступным для каждого ребенка.
                </p>
                <Title>Наша миссия</Title>
                <p className="my-5">
                    Предоставлять высококачественные услуги по аренде игрушек,
                    удобные, доступные и экологично чистые.
                </p>
            </div>
        </BlockLayout>
    );
};
