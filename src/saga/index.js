import { all } from "redux-saga/effects";
import { homeSaga } from "./homeSaga";
import { detailsSaga } from "./detailsSaga";

export default function* rootSaga() {
    yield all([
        ...homeSaga,
        ...detailsSaga
    ]);
}