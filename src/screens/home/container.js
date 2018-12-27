import { connect } from "react-redux";

import { Methods } from "./actions/homeActions";
import Index from "./index";

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return ({
        getData: () =>{
            dispatch(Methods.getData());
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
