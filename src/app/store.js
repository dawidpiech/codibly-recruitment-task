import { configureStore } from "@reduxjs/toolkit";
import colorsReducer from "../features/colors/colorsSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    colors: colorsReducer,
  },

  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
