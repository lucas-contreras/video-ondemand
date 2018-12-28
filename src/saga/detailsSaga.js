import { call, put, takeLatest } from "redux-saga/effects";
import { Constants } from "../screens/details/actions/detailsActions";
import { get, easyEndpoint } from "../services";

function* getDataByUudi() {
    try {
        const result = yield call(get, easyEndpoint);

        yield put({ type: Constants.DETAILS_GET_DATA_SUCCESS, data: result.Content });
    } catch (error) {
        yield put({ type: Constants.DETAILS_GET_DATA_SUCCESS, error });
    }
}

export const detailsSaga = [
    takeLatest(Constants.DETAILS_GET_DATA, getDataByUudi)
];