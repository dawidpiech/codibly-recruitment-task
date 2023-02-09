import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";
import {
  fetchColors,
  setColors,
  fetchErrorColors,
  fetchFilteredColor,
} from "../features/colors/colorsSlice";

function* fetchColorsHandler({ payload: page }) {
  try {
    const colors = yield axios.get(
      `https://reqres.in/api/products?per_page=5&page=${page}`
    );
    yield put(setColors(colors.data));
  } catch (error) {
    console.log(error);
    const errorMessage = "Server issue. Please try again later.";
    yield put(fetchErrorColors(errorMessage));
  }
}

function* fetchColorHandler({ payload: id }) {
  try {
    const color = yield axios.get(`https://reqres.in/api/products?id=${id}`);
    yield put(setColors({ data: new Array(color.data.data) }));
  } catch (error) {
    console.log(error);
    const errorMessage = "Record not found";
    yield put(fetchErrorColors(errorMessage));
  }
}

export function* colorsSaga() {
  yield takeEvery(fetchColors.type, fetchColorsHandler);
  yield takeEvery(fetchFilteredColor.type, fetchColorHandler);
}
