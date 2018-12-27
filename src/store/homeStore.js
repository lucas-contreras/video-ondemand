import { Constants } from "../screens/home/actions/homeActions";

const initialState = {
    error: undefined,
    data: []
};

export default function homeStore(state = initialState, action) {
    switch (action.type) {
        case Constants.HOME_GET_DATA_SUCCESS: {
            return {
                ...state,
                data: [action.data]
            }
        }
        case Constants.HOME_GET_DATA_FAILURE: {
            return {
                ...state,
                data: [],
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}
