import { connect } from "react-redux";
import React from "react";



class DeliveryTaxRates extends React.Component {


    render(){

        return(
            <h1>Delivery Tax Rates</h1>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(DeliveryTaxRates)