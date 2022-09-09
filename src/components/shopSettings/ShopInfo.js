import { DensityMedium, PowerSettingsNew } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react"
import { connect } from "react-redux";
import { removeObject } from "../../utils";
import CustomItem from '../common/CustomItem';

class ShopInfo extends React.Component {

    constructor(props) {
        super(props);
    }

    onExit = () => {
        window.location.href = "/switch";
        removeObject("shopId");
    }

    render() {
        const { shopReducer = []} = this.props;
        const { shop = {} } = shopReducer;
        const { address = {}, name, email, phoneNumber, license, shopType } = shop;
        console.log(this.props)
        return (

            <div>
                <Grid
                    item
                    container
                    sx={{ backgroundColor: 'rgb(12,183,231)' }}
                >
                    <Grid
                        item
                        sx={{ marginLeft: 2 }}
                    >
                        <Typography sx={{ marginTop: 1, color: 'white' }} variant="h5">
                            <DensityMedium />&nbsp;&nbsp; Shop information
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        sx={{ marginLeft: 'auto', marginRight: 0 }}
                    >
                        <Typography sx={{ marginTop: 1, color: 'white' }} variant="h5">
                            {shop.name} <Button onClick={this.onExit}>
                                <PowerSettingsNew sx={{ color: 'white' }} />
                            </Button>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid
                    item
                    container
                    sx={{ marginTop: 1, paddingLeft: 2 }}
                >
                    <Typography sx={{ marginTop: 1, fontWeight: 600 }} variant="h5">
                        {shop.name}
                    </Typography>
                    <Button
                        variant="contained"
                        sx={{ marginLeft: 'auto', marginRight: 2, marginTop: 8, marginBottom: 2, backgroundColor: 'rgb(12,183,231)', color: 'white' }}
                    >
                        Edit
                    </Button>
                </Grid>
                <Grid
                    item
                    xs={12}
                    className='mt-3 pl-2'
                >
                    <Paper
                        sx={{ maxWidth: '99%' }}
                        elevation={3}
                    >
                        <CustomItem text={name} label={"Shop Name"} type={"text"} />
                        <CustomItem text={shopType} label={"Shop Type"} type={"text"} />
                        <CustomItem text={shopType} label={"Shop Logo"} type={"image"} />
                        <CustomItem text={email} label={"Email"} type={"text"} />
                        <CustomItem text={phoneNumber} label={"Phone"} type={"text"} />
                        <CustomItem text={license} label={"Shop License"} type={"text"} />
                    </Paper>
                    <Paper
                        sx={{ maxWidth: '99%' }}
                        elevation={3}
                        className={"mt-4"}
                    >
                        <CustomItem text={address && address.country} label={"Country"} type={"text"} />
                        <CustomItem text={address && address.address} label={"Address"} type={"text"} />
                        <CustomItem text={address && address.city} label={"City"} type={"text"} />
                        <CustomItem text={address && address.zipCode} label={"Zip Code"} type={"text"} />
                        <CustomItem text={address && address.state} label={"State"} type={"text"} />
                        <CustomItem text="OR" label={"Time Zone"} type={"text"} />
                    </Paper>
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(ShopInfo)