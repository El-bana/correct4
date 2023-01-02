import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../lib/axios";

export const fetchUserClasses = createAsyncThunk(
  "classes/fetchUserClasses",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/users/classes");

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const fetchClassById = createAsyncThunk(
  "classes/fetchClassById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/classes/${id}`);

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const createUserClass = createAsyncThunk(
  "classes/createUserClass",
  async ({ name }, { rejectWithValue }) => {
    try {
      const response = await instance.post("/classes", { name });

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState = {
  classes: [],
};

const classesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default classesSlice.reducer;
