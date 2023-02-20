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

export const fetchPost = createAsyncThunk(
  "posts/fetchPost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:5000/posts/${id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deletePost = createAsyncThunk(
  "posts/deletePost",
  async (post, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:5000/posts/${post.id}`, {
        method: "DELETE",
      });

      return post;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editPost = createAsyncThunk(
  "posts/editPost",
  async (post, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:5000/posts/${post.id}`, {
        method: "PATCH",
        body: JSON.stringify(post),
        headers: {
          "Content-Type": "application/json",
        },
      });

      return post;
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
  initialState: { records: [], loading: false, error: null, record: null },
  reducers: {
    setRecord(state, action) {
      state.record = action.payload;
    },

    resetRecord(state) {
      state.record = null;
    },
  },
  extraReducers: (builder) => {
    //** === Fetch Posts === */
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.records = action.payload;
    });

    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //** === Fetch Post === */
    builder.addCase(fetchPost.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(fetchPost.fulfilled, (state, action) => {
      state.loading = false;
      state.record = action.payload;
    });

    builder.addCase(fetchPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //** === Add Post === */
    builder.addCase(addPost.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(addPost.fulfilled, (state, action) => {
      state.loading = false;
      state.records.push(action.payload);
    });

    builder.addCase(addPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //** === Delete Post === */
    builder.addCase(deletePost.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.records = state.records.filter((el) => el.id !== action.payload.id);
    });

    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });

    //** === Edit Post === */
    builder.addCase(editPost.pending, (state) => {
      state.loading = true;
      state.error = false;
    });

    builder.addCase(editPost.fulfilled, (state, action) => {
      state.loading = false;
      state.record = null;
    });

    builder.addCase(editPost.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const { setRecord, resetRecord } = postSlice.actions;
export default postSlice.reducer;
