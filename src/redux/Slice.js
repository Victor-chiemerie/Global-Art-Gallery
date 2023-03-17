import { createSlice } from "@reduxjs/toolkit";
import fetchData from "./API";

const IMAGE_URL = 'https://www.artic.edu/iiif/2';

const initialState = {
    artwork: [],
    status: 'idle',
    pagination: {},
    error: null,
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
                    artist_display: art.artist_display || 'Data not Found',
                    credit_line: art.credit_line || 'Data not Found',
                    link: art.api_link,
                    reference_number: art.main_reference_number,
                    date_display: art.date_display || 'Data not Found',
                    place_of_origin: art.place_of_origin || 'Data not Found',
                    exhibition_history: art.exhibition_history || 'Data not Found',
                })),
                status: 'loaded',
                pagination: { ...state.pagination, page_number: page.current_page, next_url: page.next_url || '', prev_url: page.prev_url || '', },
            };
        })
        .addCase(fetchData.rejected, (state, action) => ({
            ...state,
            status: 'Failed to load',
        }));
    }
});

export default Slice.reducer;
