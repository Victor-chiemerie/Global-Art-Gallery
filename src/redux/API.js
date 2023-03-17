import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from "axios";

const fetchData = createAsyncThunk('data/fetchData', async (URL) => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
  // const response = await fetch(URL);
  //         const data = await response.json();
  //         return data;
});

export default fetchData;
