import { PowerSettingsNew, DensityMedium } from "@mui/icons-material";
import { Button, Grid, ListItem, Paper, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getShopById } from "../actions/shop";


class Auth extends React.Component {

    constructor(props) {

        const search = window.location.search; // returns the URL query String
        const params = new URLSearchParams(search);
        const IdFromURL = params.get('shopId');

        super(props);
        this.state = {
            shopId: IdFromURL
        }

        this.componentDidMount = () => {
            this.props.dispatch(getShopById(this.state.shopId))
        }
    }

    render() {
        const {
            shopReducer = []
        } = this.props

        const { shop } = shopReducer;
        const { address, name, email, phoneNumber, license, shopType } = shop;
        const { city, state, zipCode, country } = address;
        return (
            <Grid container>
                <Grid
                    item
                    container
                    xs={2}
                >

                </Grid>
                <Grid
                    item
                    container
                    xs={10}
                >
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
                                {shop.name} <Button>
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
                            sx={{ marginLeft: 'auto', marginRight: 2, marginTop: 8, backgroundColor: 'rgb(12,183,231)', color: 'white' }}
                        >
                            Edit
                        </Button>
                    </Grid>
                    <Grid
                        xs={12}
                        className='mt-3 pl-2'
                    >
                        <Paper
                            sx={{ maxWidth: '99%' }}
                            elevation={3}
                        >
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        Shop Name
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>{name}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        Shop Type
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>{shopType}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        Shop Logo
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <img
                                            style={{
                                                width: 150,
                                                height: 150
                                            }}
                                            alt=""
                                            src="/assets/img/cannabis.jpg" />
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        Email
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>{email}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        Phone
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>{phoneNumber}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        Shop License
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>{license}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </Paper>
                        <Paper
                            sx={{ maxWidth: '99%' }}
                            elevation={3}
                            className={"mt-4"}
                        >
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        Country
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>{country}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        Address
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>{address.address}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        City
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>{city}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        Zip Code
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>{zipCode}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        State
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>{state}</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                            <ListItem>
                                <Grid
                                    container
                                >
                                    <Grid item xs={12} sm={6}>
                                        Time Zone
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Typography>OR</Typography>
                                    </Grid>
                                </Grid>
                            </ListItem>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        )
    }

}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(Auth)