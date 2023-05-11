import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../lib/axios";

export const fetchUserExames = createAsyncThunk(
  "exames/fetchUserExames",
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get("/users/groups");

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const fetchExamById = createAsyncThunk(
  "exames/fetchExamById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/groups/${id}`);

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const setModelAnswer = createAsyncThunk(
  "exames/handleUploadModelAnswer",
  async (payload, { rejectWithValue }) => {
    try {
      const { id, file } = payload;

      const formData = new FormData();

      formData.append("model", file);

      const response = await instance.post(
        `/groups/${id}/setModelAnswer`,
        formData
      );

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const correctMCQPapers = createAsyncThunk(
  "exames/handleCorrectMCQPapers",
  async (payload, { rejectWithValue }) => {
    try {
      const { id, fileList } = payload;

      const formData = new FormData();

      Object.keys(fileList).forEach((f) =>
        formData.append("papers", fileList[f])
      );

      console.log(formData, fileList);

      const response = await instance.post(
        `/groups/${id}/correctMCQPapers`,
        formData
      );

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const createUserExam = createAsyncThunk(
  "exames/createUserExam",
  async (payload, { rejectWithValue }) => {
    try {
      const { name, classId, modelName } = payload;

      const response = await instance.post("/groups", {
        name,
        class_id: classId,
        model_name: modelName,
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export const generateCSV = createAsyncThunk(
  "exames/generateCSV",
  async (payload, { rejectWithValue }) => {
    try {
      const { examId } = payload;

      const response = await instance.post(`/groups/${examId}/generateReport`, {
        responseType: "blob",
      });

      return response.data;
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const initialState = {
  exames: [],
};

const examesSlice = createSlice({
  name: "exames",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default examesSlice.reducer;
