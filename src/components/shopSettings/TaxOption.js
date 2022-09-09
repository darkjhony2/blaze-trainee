import { connect } from "react-redux";
import React from "react";



class TaxOption extends React.Component {


    render(){

        return(
            <h1>Tax Option</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(TaxOption)