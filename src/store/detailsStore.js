import { Constants } from "../screens/details/actions/detailsActions"

const initialState = {
    loading: true,
    loaded: false,
    error: undefined,
    data: {}
};

export default function detailsStore(state = initialState, action) {
    switch (action.type) {
        case Constants.DETAILS_GET_DATA: {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        case Constants.DETAILS_GET_DATA_SUCCESS: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.data
            }
        }
        case Constants.DETAILS_GET_DATA_FAILURE: {
            return {
                ...state,
                loading: false,
                loaded: true,
                data: undefined,
                error: action.error
            }
        }
        case Constants.DETAILS_CLEAN_STATE: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}
