import { basketReducer } from '@store/basketSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { itemsReducer } from './items-slice';
import { notificationReducer } from '@features/notification/notification-slice';

export const rootReducer = combineReducers({
    basket: basketReducer,
    items: itemsReducer,
    notification: notificationReducer
});
