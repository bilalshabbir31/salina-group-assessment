import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialData = {
  email: "",
  phoneNumber: "",
  website: "",
  gender: "",
  dateOfBirth: "",
  nationality: "",
  nationalIdNumber: "",
  country: "",
  provinceState: "",
  city: "",
  postalZipCode: "",
  address: "",
};

export const addUser = createAsyncThunk(
  "user/addUser",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:8080/api/profile",
        userData
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "formData",
  initialState: {
    formData: initialData,
    responseData: null,
    status: "idle",
    error: null,
  },
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    resetForm: (state) => {
      state.formData = initialData;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.responseData = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { updateField, resetForm } = userSlice.actions;

export default userSlice.reducer;
