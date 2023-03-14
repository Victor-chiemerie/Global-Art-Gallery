import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// https://api.artic.edu/api/v1/artworks?page=2&fields=id,title,artist_display,date_display,main_reference_number,api_link,image_id

const fetchData = createAsyncThunk('data/fetchData', async (number) => {
        const response = await axios.get(`https://api.artic.edu/api/v1/artworks?page=${number}&fields=id,title,artist_display,date_display,main_reference_number,api_link,image_id`);
        return response.data;
});

export default fetchData;