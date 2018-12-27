export const HOME_GET_DATA = "HOME_GET_DATA";
export const HOME_GET_DATA_FAILURE = "HOME_GET_DATA_FAILURE";
export const HOME_GET_DATA_SUCCESS = "HOME_GET_DATA_SUCCESS";

export function getData() {
    return (dispatch) => {
        dispatch({ type: HOME_GET_DATA });
    }
}

export const Constants = {
    HOME_GET_DATA,
    HOME_GET_DATA_FAILURE,
    HOME_GET_DATA_SUCCESS
}

export const Methods = {
    getData
}