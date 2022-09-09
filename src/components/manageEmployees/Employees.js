import { connect } from "react-redux";
import React from "react";



class Employees extends React.Component {


    render(){

        return(
            <h1>Employees</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(Employees)