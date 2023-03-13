import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,api_link,image_id';

const fetchData = createAsyncThunk('data/fetchData', async () => {
    const response = await axios.get(BASE_URL);
    // console.log(response.pagination);
    return response.data;
});

export default fetchData;