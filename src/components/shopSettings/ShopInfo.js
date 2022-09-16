import { DensityMedium, PowerSettingsNew } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react"
import { connect } from "react-redux";
import { getObject, removeObject } from "../../utils";
import { getBooleanTranslation } from "../../utils/util";
import CustomItem from '../common/CustomItem';

class ShopInfo extends React.Component {

    constructor(props) {
        super(props);
        const { shopReducer = [] } = this.props;
        const { shop = {} } = shopReducer;
        const { address = {}, name, email, phoneNumber,
            license, shopType, showWalkInQueue, showDeliveryQueue, showOnlineQueue,
            showSpecialQueue, enableCashInOut, active, enableSaleLogout } = shop;
        this.state = {
            editMode: false,
            address: address,
            name: name,
            email: email,
            phoneNumber: phoneNumber,
            license: license,
            shopType: shopType,
            showWalkInQueue: showWalkInQueue,
            showDeliveryQueue: showDeliveryQueue,
            showOnlineQueue: showOnlineQueue,
            showSpecialQueue: showSpecialQueue,
            enableCashInOut: enableCashInOut,
            active: active,
            enableSaleLogout: enableSaleLogout
        }
    }


    onExit = () => {
        window.location.href = "/switch";
        removeObject("shopId");
        removeObject("shopName");
    }

    onEdit = () => {
        this.setState({
            editMode: true
        })
    }

    onSave = () => {

        let data = {};
        let address = {};
        address.

        this.setState({
            editMode: false
        })
    }

    onChange = (e, type) => {
        this.setState({
            [e.target.name]: type === 'text' ? e.target.value : e.target.checked
        })
    }

    render() {

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
                            {getObject("shopName")} <Button onClick={this.onExit}>
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
                        {getObject("shopName")}
                    </Typography>
                    {
                        this.state.editMode ?
                            <Button
                                variant="contained"
                                sx={{ marginLeft: 'auto', marginRight: 2, marginTop: 8, marginBottom: 2, backgroundColor: 'rgb(12,183,231)', color: 'white' }}
                                onClick={this.onSave}
                            >
                                Save
                            </Button>
                            :
                            <Button
                                variant="contained"
                                sx={{ marginLeft: 'auto', marginRight: 2, marginTop: 8, marginBottom: 2, backgroundColor: 'rgb(12,183,231)', color: 'white' }}
                                onClick={this.onEdit}
                            >
                                Edit
                            </Button>
                    }
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
                        <CustomItem value={this.state.name} label={"Shop Name"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"name"} />
                        <CustomItem value={this.state.shopType} label={"Shop Type"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"shopType"} />
                        <CustomItem label={"Shop Logo"} type={"image"} />
                        <CustomItem value={this.state.email} label={"Email"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"email"} />
                        <CustomItem value={this.state.phoneNumber} label={"Phone"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"phoneNumber"} />
                        <CustomItem value={this.state.license} label={"Shop License"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"license"} />
                    </Paper>
                    <Paper
                        sx={{ maxWidth: '99%' }}
                        elevation={3}
                        className={"mt-4"}
                    >
                        <CustomItem value={this.state.address && this.state.address.country} label={"Country"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"country"} />
                        <CustomItem value={this.state.address && this.state.address.address} label={"Address"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"address"} />
                        <CustomItem value={this.state.address && this.state.address.city} label={"City"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"city"} />
                        <CustomItem value={this.state.address && this.state.address.zipCode} label={"Zip Code"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"zipCode"} />
                        <CustomItem value={this.state.address && this.state.address.state} label={"State"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"state"} />
                        <CustomItem value="OR" label={"Time Zone"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"timeZone"} />
                    </Paper>
                    <Paper
                        sx={{ maxWidth: '99%' }}
                        elevation={3}
                        className={"mt-4"}
                    >
                        <CustomItem value={this.state.showWalkInQueue} label={"Show Walk In Queue"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"showWalkInQueue"} />
                        <CustomItem value={this.state.showDeliveryQueue} label={"Show Delivery Queuee"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"showDeliveryQueue"} />
                        <CustomItem value={this.state.showOnlineQueue} label={"Show Online Queue"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"showOnlineQueue"} />
                        <CustomItem value={this.state.showSpecialQueue} label={"Show Special Queue"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"showSpecialQueue"} />
                        <CustomItem value={this.state.enableCashInOut} label={"Enable Cash In Out"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"enableCashInOut"} />
                        <CustomItem value={this.state.active} label={"Status"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"active"} />
                        <CustomItem value={this.state.enableSaleLogout} label={"Sale Logout"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"enableSaleLogout"} />
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