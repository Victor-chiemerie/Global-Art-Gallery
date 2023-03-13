import { configureStore } from "@reduxjs/toolkit";
import reducer from './Slice'

export const store = configureStore({
    reducer: {
        art: reducer,
    },
});

export default store;