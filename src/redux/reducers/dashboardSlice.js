import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


export const getCategoryThunk = createAsyncThunk('/get/category', async () => {
    const res = await axios.get('https://northwind.vercel.app/api/categories');
    return res.data;
});

export const postCategoryThunk = createAsyncThunk('/post/category', async (newCategory) => {
    const res = await axios.post('https://northwind.vercel.app/api/categories', newCategory);
    return res.data;
});

export const deleteCategoryThunk = createAsyncThunk('delete/category', async (id) => {
    await axios.delete(`https://northwind.vercel.app/api/categories/${id}`);
    return id;
});

export const updateCategoryThunk = createAsyncThunk('update/category', async ({ id, updatedData }) => {
    const res = await axios.put(`https://northwind.vercel.app/api/categories/${id}`, updatedData);
    return res.data;
});

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState: {
        categories: [],

    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getCategoryThunk.fulfilled, (state, action) => {
                state.loading = false;
                state.categories = action.payload;
            })
            .addCase(getCategoryThunk.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCategoryThunk.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(postCategoryThunk.fulfilled, (state, action) => {
                state.categories.push(action.payload);
            })
            .addCase(deleteCategoryThunk.fulfilled, (state, action) => {
                state.categories = state.categories.filter(data => data.id !== action.payload);
            })
            .addCase(updateCategoryThunk.fulfilled, (state, action) => {
                const index = state.categories.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.categories[index] = action.payload;
                }
            });
    },
});

export default dashboardSlice.reducer;
