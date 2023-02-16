import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/posts");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addPost = createAsyncThunk(
  "posts/addPost",
  async (post, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:5000/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const postSlice = createSlice({
  name: "posts",
  initialState: { records: [], loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    //** === Fetch Posts === */
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //** === Add Post === */
    builder.addCase(addPost.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    });

    builder.addCase(addPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default postSlice.reducer;
