import { Constants } from "../screens/home/actions/homeActions";

const initialState = {};

export default function homeStore(state = initialState, action) {
    switch (action.type) {
        case Constants.HOME_GET_DATA_FAILURE: {
            debugger;
            return {
                ...state,
                error: action.error
            }
        }
        default: {
            return state;
        }
    }
}
