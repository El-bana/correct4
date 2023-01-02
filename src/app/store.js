import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user";
import classesReducer from "../features/classes";

export const store = configureStore({
  reducer: {
    user: userReducer,
    classes: classesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});
