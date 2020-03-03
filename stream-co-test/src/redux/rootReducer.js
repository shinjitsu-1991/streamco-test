import { createActions, handleActions } from "redux-actions";
const { API_CALL_REQUEST, API_CALL_SUCCESS, API_CALL_FAILURE } = createActions('API_CALL_REQUEST', 'API_CALL_SUCCESS', 'API_CALL_FAILURE');

const initialState = {
    fetching: false,
    data: null,
    error: null
};

const reducer = handleActions({
        [API_CALL_REQUEST]: state => ({ ...state, fetching: true, error: null }),
        [API_CALL_SUCCESS]: (state, action) => ({ ...state, fetching: false, data: action.data }),
        [API_CALL_FAILURE]: (state, action) => ({ ...state, fetching: false, data: null, error: action.error })
    },initialState);

export { reducer };