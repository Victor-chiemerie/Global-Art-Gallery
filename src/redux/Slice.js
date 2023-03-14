import { createSlice } from "@reduxjs/toolkit";
import fetchData from "./API";

const IMAGE_URL = 'https://www.artic.edu/iiif/2';

const initialState = {
    artwork: [],
    status: 'idle',
    pagination: {},
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
            const page = action.payload.pagination;
            console.log(page);
            return {
                ...state,
                artwork: data.map((art) => ({
                    id: art.id,
                    title: art.title,
                    link: art.api_link,
                    image: `${IMAGE_URL}/${art.image_id}/full/843,/0/default.jpg`,
                })),
                status: 'loaded',
                pagination: { ...state.pagination, page_number: page.current_page, next_url: page.next_url, prev_url: page.prev_url || '', },
            };
        })
        .addCase(fetchData.rejected, (state) => ({
            ...state,
            status: 'failed',
        }));
        // .addCase(fetchData.rejected, (state, action) => {
        //     const error = action.error
        //     return {
        //         ...state,
        //         status: 'failed',
        //         artwork: [...state.artwork, { Message: error.message, code: error.code, name: error.name, }],
        //     }
        // });
    }
});

export default Slice.reducer;
