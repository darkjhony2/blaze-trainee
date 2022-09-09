import { connect } from "react-redux";
import React from "react";

class Terminals extends React.Component {

    render() {

        return (
            <h1>Terminals</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(Terminals)