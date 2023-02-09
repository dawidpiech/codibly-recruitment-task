import { all } from "redux-saga/effects";
import { colorsSaga } from "../services/ColorsSaga";

function* rootSaga() {
  yield all([colorsSaga()]);
}

export default rootSaga;
