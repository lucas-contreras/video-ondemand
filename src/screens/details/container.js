import { connect } from "react-redux";

import { Methods } from "./actions/detailsActions";
import Index from "./index";


const mapStateToProps = (state) => {
    return {
        ...state.detailsStore
    };
};

const mapDispatchToProps = (dispatch) => {
    return ({
        getDataByUudi: (uuid) => {
            dispatch(Methods.getDataByUudi(uuid))
        },
        cleanState: () =>{
            dispatch(Methods.cleanState())
        }
    });
};

/**
 * HOC Index
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
