import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk('data/fetchData', async (URLs) => {
        const response = await axios.get(URL);
        return response.data;
});

export default fetchData;