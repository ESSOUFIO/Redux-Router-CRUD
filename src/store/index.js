import { configureStore } from "@reduxjs/toolkit";
import posts from "./postSlice";
import ui from "./uiSlice";

const store = configureStore({ reducer: { posts, ui } });
export default store;
