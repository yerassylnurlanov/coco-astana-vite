import { Provider } from 'react-redux';
import { MainPage } from '@pages/main';
import { Header } from '../header';
import { store } from '../store';
import { Footer } from '@features/footer/footer';
import ErrorBoundary from '@features/error-boundary';
import { RouterProvider } from 'react-router-dom';
import { router } from '@features/router';

import 'antd/dist/reset.css';
import './App.css';
export const App = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <Header />
                <RouterProvider router={router} />
                <Footer />
            </Provider>
        </ErrorBoundary>
    );
};

export default App;
