import { configureStore } from "@reduxjs/toolkit";
import posts from "./postSlice";
import ui from "./uiSlice";
import auth from "./authSlice";

const store = configureStore({ reducer: { posts, ui, auth } });
export default store;
