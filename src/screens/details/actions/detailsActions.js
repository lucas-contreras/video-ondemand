export const DETAILS_GET_DATA = "DETAILS_GET_DATA";
export const DETAILS_GET_DATA_FAILURE = "DETAILS_GET_DATA_FAILURE";
export const DETAILS_GET_DATA_SUCCESS = "DETAILS_GET_DATA_SUCCESS";
export const DETAILS_CLEAN_STATE = "DETAILS_CLEAN_STATE";

/** */
export function getDataByUudi(uuid) {
    return (dispatch) => {
        // setTimeout(() => {
        //     dispatch({ type: DETAILS_GET_DATA, uuid });
        // }, 2000);

        dispatch({ type: DETAILS_GET_DATA, uuid });
    }
}
/** */
export function cleanState() {
    return (dispatch) => {
        dispatch({ type: DETAILS_CLEAN_STATE });
    }
}

export const Constants = {
    DETAILS_GET_DATA,
    DETAILS_GET_DATA_FAILURE,
    DETAILS_GET_DATA_SUCCESS,
    DETAILS_CLEAN_STATE
}

export const Methods = {
    getDataByUudi,
    cleanState
}