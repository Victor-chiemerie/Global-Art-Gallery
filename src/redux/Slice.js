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
            return {
                ...state,
                artwork: data.map((art) => ({
                    id: art.id,
                    title: art.title,
                    image: `${IMAGE_URL}/${art.image_id}/full/843,/0/default.jpg`,
                    alt_text: art.thumbnail,
                    type: art.artwork_type_title,
                    dimensions: art.dimensions,
                    artist_display: art.artist_display,
                    credit_line: art.credit_line,
                    link: art.api_link,
                    reference_number: art.main_reference_number,
                    date_display: art.date_display,
                    place_of_origin: art.place_of_origin,
                    exhibition_history: art.exhibition_history,
                    updated_at: art.updated_at,
                })),
                status: 'loaded',
                pagination: { ...state.pagination, page_number: page.current_page, next_url: page.next_url || '', prev_url: page.prev_url || '', },
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
