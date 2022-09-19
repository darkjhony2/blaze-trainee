import { DensityMedium, PowerSettingsNew } from "@mui/icons-material";
import { Button, Grid, Paper, Typography } from "@mui/material";
import React from "react"
import { connect } from "react-redux";
import { deleteShop, getShopById, updateShop } from "../../actions/shop";
import { getObject, removeObject, saveObject } from "../../utils";
import CustomItem from '../common/CustomItem';

class ShopInfo extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editMode: false,
            shop: {},
            address: {}
        }
    }

    componentDidUpdate(nextProps) {
        const { shopReducer = [] } = nextProps;
        const { shop = {} } = shopReducer;
        if (shop.id != getObject("shopId") || !this.state.shop.id) {
            console.log("entro");
            this.setState({
                shop: shop,
                address: shop.address
            })
        }

    }

    onChange = (e, type) => {
        this.setState({
            shop: {
                ...this.state.shop,
                [e.target.name]: type === 'text' ? e.target.value : e.target.checked
            }
        })
    }

    onChangeAddress = (e, type) => {
        this.setState({
            address: {
                ...this.state.address,
                [e.target.name]: type === 'text' ? e.target.value : e.target.checked
            }
        })
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

        let data = this.state.shop;
        data.address = this.state.address

        this.props.dispatch(updateShop(data));
        this.setState({
            editMode: false
        })
        removeObject("shopName");
        saveObject("shopName", this.state.shop.name);
        window.location.href = `/settings`;
    }

    onDelete = () => {
        this.props.dispatch(deleteShop(this.state.shop.id));
        window.location.href = `/settings`;
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
                    <Grid container item xs={2} sx={{ marginLeft: 'auto', marginRight: 0, marginTop: 8, marginBottom: 2 }}>
                        <Grid item xs={6}>
                            {
                                this.state.editMode ?
                                    <Button
                                        variant="contained"
                                        onClick={this.onSave}
                                        sx={{ color: 'white' }}
                                    >
                                        Save
                                    </Button>
                                    :
                                    <Button
                                        variant="contained"
                                        onClick={this.onEdit}
                                        sx={{ backgroundColor: 'rgb(12,183,231)', color: 'white' }}
                                    >
                                        Edit
                                    </Button>
                            }
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                onClick={this.onDelete}
                                sx={{ backgroundColor: 'red', color: 'white' }}
                                disabled={this.state.editMode ? true: false}
                            >
                                Delete
                            </Button>
                        </Grid>
                    </Grid>
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
                        <CustomItem value={this.state.shop && this.state.shop.name} label={"Shop Name"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"name"} />
                        <CustomItem value={this.state.shop && this.state.shop.shopType} label={"Shop Type"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"shopType"} />
                        <CustomItem label={"Shop Logo"} type={"image"} />
                        <CustomItem value={this.state.shop && this.state.shop.email} label={"Email"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"email"} />
                        <CustomItem value={this.state.shop && this.state.shop.phoneNumber} label={"Phone"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"phoneNumber"} />
                        <CustomItem value={this.state.shop && this.state.shop.license} label={"Shop License"} type={"text"} editMode={this.state.editMode} onChange={this.onChange} textName={"license"} />
                    </Paper>
                    <Paper
                        sx={{ maxWidth: '99%' }}
                        elevation={3}
                        className={"mt-4"}
                    >
                        <CustomItem value={this.state.address && this.state.address.country} label={"Country"} type={"text"} editMode={this.state.editMode} onChange={this.onChangeAddress} textName={"country"} />
                        <CustomItem value={this.state.address && this.state.address.address} label={"Address"} type={"text"} editMode={this.state.editMode} onChange={this.onChangeAddress} textName={"address"} />
                        <CustomItem value={this.state.address && this.state.address.city} label={"City"} type={"text"} editMode={this.state.editMode} onChange={this.onChangeAddress} textName={"city"} />
                        <CustomItem value={this.state.address && this.state.address.zipCode} label={"Zip Code"} type={"text"} editMode={this.state.editMode} onChange={this.onConChangeAddresshange} textName={"zipCode"} />
                        <CustomItem value={this.state.address && this.state.address.state} label={"State"} type={"text"} editMode={this.state.editMode} onChange={this.onChangeAddress} textName={"state"} />
                        <CustomItem value="OR" label={"Time Zone"} type={"text"} editMode={this.state.editMode} onChange={this.onChangeAddress} textName={"timeZone"} />
                    </Paper>
                    <Paper
                        sx={{ maxWidth: '99%' }}
                        elevation={3}
                        className={"mt-4"}
                    >
                        <CustomItem value={this.state.shop && this.state.shop.showWalkInQueue} label={"Show Walk In Queue"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"showWalkInQueue"} />
                        <CustomItem value={this.state.shop && this.state.shop.showDeliveryQueue} label={"Show Delivery Queuee"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"showDeliveryQueue"} />
                        <CustomItem value={this.state.shop && this.state.shop.showOnlineQueue} label={"Show Online Queue"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"showOnlineQueue"} />
                        <CustomItem value={this.state.shop && this.state.shop.showSpecialQueue} label={"Show Special Queue"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"showSpecialQueue"} />
                        <CustomItem value={this.state.shop && this.state.shop.enableCashInOut} label={"Enable Cash In Out"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"enableCashInOut"} />
                        <CustomItem value={this.state.shop && this.state.shop.active} label={"Status"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"active"} />
                        <CustomItem value={this.state.shop && this.state.shop.enableSaleLogout} label={"Sale Logout"} type={"boolean"} editMode={this.state.editMode} onChange={this.onChange} textName={"enableSaleLogout"} />
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