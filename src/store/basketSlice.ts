import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getRentCost } from '@features/lib';
import { boolean } from 'yup';
import { notificationActions } from '@features/notification/notification-slice';

export interface BasketItem {
    id: number;
    name: string;
    cost: number;
    rentPrice: number;
    rentDays: number;
    image: string;
}
interface BasketState {
    items: BasketItem[];
    sum: number;
    oneClickRent: boolean;
}

const initialState: BasketState = {
    items: [],
    sum: 0,
    oneClickRent: false
};

export const { reducer: basketReducer, actions: basketActions } = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItem: (state, { payload }: PayloadAction<BasketItem>) => {
            state.items.push(payload);
            const itemIndex = state.items.findIndex(
                (item) => item.id === payload.id
            );
            state.items[itemIndex].rentPrice = getRentCost({
                cost: state.items[itemIndex].cost,
                day: payload.rentDays
            });
        },
        updateRentDays: (
            state,
            { payload }: PayloadAction<{ id: number; days: number }>
        ) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === payload.id
            );
            state.items[itemIndex].rentDays = payload.days;
            state.items[itemIndex].rentPrice = getRentCost({
                cost: state.items[itemIndex].cost,
                day: payload.days
            });
        },
        setSum: (state, { payload }: PayloadAction<{ sum: number }>) => {
            state.sum = payload.sum;
        },

        removeItem: (state, action: PayloadAction<number>) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );
            state.items.splice(itemIndex, 1);
        },
        cleanBasket: (state) => {
            state.items = initialState.items;
        },
        oneClickRent: (state, { payload }: PayloadAction<BasketItem>) => {
            state.items.push(payload);
            const itemIndex = state.items.findIndex(
                (item) => item.id === payload.id
            );
            state.items[itemIndex].rentPrice = getRentCost({
                cost: state.items[itemIndex].cost,
                day: payload.rentDays
            });
        },

        setOneClickRent: (state, action: PayloadAction<boolean>) => {
            state.oneClickRent = action.payload;
        }
    }
});

export const { addItem, removeItem } = basketActions;

// Action creators are generated for each case reducer function
