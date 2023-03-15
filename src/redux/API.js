import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchData = createAsyncThunk('data/fetchData', async (URL) => {
        const response = await axios.get(URL);
        return response.data;
});

export default fetchData;