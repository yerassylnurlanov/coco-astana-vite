import { MainPage } from '@pages/main';
import AboutUs from '@pages/about-us/about-us';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Basket from './basket/Basket';
import { ErrorPage } from './error-page';
import Items from '@pages/items/items';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPage />,
        errorElement: <ErrorPage />
    },
    {
        path: '/basket',
        element: <Basket />,
        errorElement: <ErrorPage />
    },
    {
        path: '/about-us',
        element: <AboutUs />,
        errorElement: <ErrorPage />
    },
    {
        path: '/items',
        element: <Items />,
        errorElement: <ErrorPage />
    }
]);
