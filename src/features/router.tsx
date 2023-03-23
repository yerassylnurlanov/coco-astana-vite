import { AboutUsPage } from '@pages/about-us';
import { BasketPage } from '@pages/basket';
import { ContactsPage } from '@pages/contacts';
import { MainPage } from '@pages/main';
import { Layout } from '@ui/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ErrorPage } from './error-page';
import { ItemPage } from '@pages/item/item';
import { CategoriesPage } from '@pages/categories';
import { CategoriesIdPage } from '@pages/categories/categories-id';
export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <MainPage />
            </Layout>
        ),
        errorElement: <ErrorPage />,
        loader: undefined
    },
    {
        path: '/basket',
        element: (
            <Layout>
                <BasketPage />
            </Layout>
        ),
        errorElement: <ErrorPage />,
        loader: undefined
    },
    {
        path: '/contacts',
        element: (
            <Layout>
                <ContactsPage />
            </Layout>
        ),
        errorElement: <ErrorPage />,
        loader: undefined
    },

    {
        path: '/about-us',
        element: (
            <Layout>
                <AboutUsPage />
            </Layout>
        ),
        errorElement: <ErrorPage />,
        loader: undefined
    },
    {
        path: '/categories/:category_id/item/:item_id',
        element: (
            <Layout>
                <ItemPage />
            </Layout>
        ),
        errorElement: <ErrorPage />,
        loader: undefined
    },
    {
        path: '/categories',
        element: (
            <Layout>
                <CategoriesPage />
            </Layout>
        ),
        errorElement: <ErrorPage />,
        loader: undefined
    },
    {
        path: '/categories/:category_id',
        element: (
            <Layout>
                <CategoriesIdPage />
            </Layout>
        ),
        errorElement: <ErrorPage />,
        loader: undefined
    }
]);
