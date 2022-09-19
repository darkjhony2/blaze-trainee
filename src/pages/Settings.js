import { Grid } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getShopById } from "../actions/shop";
import NavBar from "../components/common/NavBar";
import { getObject } from "../utils";
import { getPageToBeRendered } from "../utils/util";


class Settings extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            shopId: getObject("shopId"),
            pageToBeRendered: 'shop'
        }

        this.componentDidMount = () => {
            this.props.dispatch(getShopById(this.state.shopId))
        }
    }

    onChangePage = (newPageUrl) => {
        this.setState({ pageToBeRendered: newPageUrl })
        console.log(this.state.shopId);
    }

    render() {
        let page = <></>;

        page = getPageToBeRendered(this.state.pageToBeRendered);

        return (
            <Grid container>
                <Grid
                    item
                    container
                    xs={0} sm ={2}
                >
                    <Grid item xs={12}>
                        <NavBar onChangePage={this.onChangePage} />
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    xs={12} sm={10}
                >
                    <Grid item xs={12}>
                        {page}
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(Settings)