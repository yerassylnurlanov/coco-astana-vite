import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export interface InitialState {
    type: 'info' | 'success' | 'warning' | 'error';
    message: string;
}

export const initialState: InitialState = {
    type: 'info',
    message: ''
};

export const { actions: notificationActions, reducer: notificationReducer } =
    createSlice({
        name: 'notification',
        initialState,
        reducers: {
            setNotificationMessage: (
                _,
                action: PayloadAction<InitialState>
            ) => {
                createNotification(
                    action.payload.type,
                    action.payload.message
                )();
                return action.payload;
            }
        }
    });

const createNotification = (type: string, message: string) => {
    return () => {
        switch (type) {
            case 'info':
                toast.info(message);
                break;
            case 'success':
                toast.success(message);
                break;
            case 'warning':
                toast.warn(message);
                break;
            case 'error':
                toast.error(message);
                break;
        }
    };
};
