import { connect } from "react-redux";

import Index from "./index";

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return ({});
};

/**
 * HOC Index
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
