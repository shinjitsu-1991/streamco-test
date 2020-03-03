import { takeLatest, call, put } from "redux-saga/effects";
import axios from "axios";

export function* watcherSaga() {
    yield takeLatest("API_CALL_REQUEST", workerSaga);
}

function fetchData() {
    return axios.get(process.env.PUBLIC_URL+"/assets/data/data.json")
}

function* workerSaga() {
    try {
        const response = yield call(fetchData);
        const data = response.data;
        yield put({ type: "API_CALL_SUCCESS", data });

    } catch (error) {
        yield put({ type: "API_CALL_FAILURE", error });
    }
}