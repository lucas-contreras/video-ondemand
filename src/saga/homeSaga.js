import { call, put, takeLatest } from "redux-saga/effects";
import { Constants } from "../screens/home/actions/homeActions";
import { get, easyEndpoint, hardEndpoint } from "../services";

function* getData() {
    try {
        const result = yield call(get, hardEndpoint);

        debugger;

        yield put({ type: Constants.HOME_GET_DATA_SUCCESS, data: result.Content });
    } catch (error) {
        yield put({ type: Constants.HOME_GET_DATA_FAILURE, error });
    }
}

function* rootSaga() {
    yield takeLatest(Constants.HOME_GET_DATA, getData);
}

export default rootSaga;