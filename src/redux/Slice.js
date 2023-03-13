import { createSlice } from "@reduxjs/toolkit";
import fetchData from "./API";

const IMAGE_URL = 'https://www.artic.edu/iiif/2';

const initialState = {
    artwork: [],
    status: 'idle',
    pagination: [],
};

export const Slice = createSlice({
    name: 'Artwork',
    initialState,
    extraReducers(builder) {
        builder
        .addCase(fetchData.pending, (state) => ({
            ...state,
            status: 'loading...',
        }))
        .addCase(fetchData.fulfilled, (state, action) => {
            const data = action.payload.data;
            console.log(data);
            return {
                ...state,
                artwork: data.map((art) => ({
                    id: art.id,
                    title: art.title,
                    link: art.api_link,
                    image: `${IMAGE_URL}/${art.image_id}/full/843,/0/default.jpg`,
                })),
                status: 'loaded',
            };
        })
        .addCase(fetchData.rejected, (state) => ({
            ...state,
            status: 'failed',
        }));
    }
});

export default Slice.reducer;
