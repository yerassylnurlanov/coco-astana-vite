import { Provider } from 'react-redux';
import ErrorBoundary from '@features/error-boundary';
import { RouterProvider } from 'react-router-dom';
import { router } from '@features/router';
import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify';
import { persistor, store } from '@store/store';

import 'antd/dist/reset.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
export const App = () => {
    return (
        <ErrorBoundary>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <RouterProvider router={router} />
                    <ToastContainer autoClose={2000} />
                </PersistGate>
            </Provider>
        </ErrorBoundary>
    );
};

export default App;
