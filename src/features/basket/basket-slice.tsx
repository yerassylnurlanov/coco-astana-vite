import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface BasketState {
    items: Item[];
    loading: boolean;
    error: string | null;
}

interface Item {
    id: string;
    name: string;
    price: number;
    quantity: number;
}

export const fetchBasket = createAsyncThunk('basket/fetchBasket', async () => {
    try {
        // fetch basket items from API or mock data
        const items = [
            { id: 'item1', name: 'Item 1', price: 10, quantity: 2 },
            { id: 'item2', name: 'Item 2', price: 5, quantity: 3 }
        ];

        return items;
    } catch (error) {
        return error;
    }
});

const basketSlice = createSlice({
    name: 'basket',
    initialState: { items: [], loading: false, error: null } as BasketState,
    reducers: {
        addToBasket: (state, action) => {
            const { id, quantity } = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity += quantity;
            } else {
                state.items.push({ ...action.payload, quantity });
            }
        },
        removeFromBasket: (state, action) => {
            const itemIndex = state.items.findIndex(
                (item) => item.id === action.payload
            );
            if (itemIndex !== -1) {
                state.items.splice(itemIndex, 1);
            }
        },
        updateBasketItemQuantity: (state, { payload }) => {
            const { id, quantity } = payload;
            const itemIndex = state.items.findIndex((item) => item.id === id);
            if (itemIndex !== -1) {
                state.items[itemIndex].quantity = quantity;
            }
        }
    },
    extraReducers: {
        [fetchBasket.pending.type]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [fetchBasket.fulfilled.type]: (state, action) => {
            state.loading = false;
            state.items = action.payload;
        },
        [fetchBasket.rejected.type]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        }
    }
});

export const { addToBasket, removeFromBasket, updateBasketItemQuantity } =
    basketSlice.actions;

export default basketSlice.reducer;
