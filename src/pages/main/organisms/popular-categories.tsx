import { CategoryCard } from '@ui/category-card';
import { BlockLayout } from '@ui/block-layout';
import { useSelector } from 'react-redux';
import { AppState } from '@store/store';
import swing from '@assets/images/categories/swing.svg';

export const PopularCategories = () => {
    const categories = useSelector(
        ({ items: { categories } }: AppState) => categories
    );

    return (
        <BlockLayout title="Категории">
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-8 md:gap-y-4 md:gap-x-2 ">
                {categories.map(({ id, image, name }, index) => (
                    <CategoryCard
                        id={id}
                        icon={image !== undefined ? getImageUrl(image) : swing}
                        title={name}
                        key={index}
                    />
                ))}
            </div>
        </BlockLayout>
    );
};
export const getImageUrl = (name: string) => {
    return new URL(`../../../assets/images/categories/${name}`, import.meta.url)
        .href;
};
