import { Grid, Button, Typography, Paper } from "@mui/material"
import { Settings, PowerSettingsNew } from '@mui/icons-material'
import React from "react"
import { connect } from "react-redux";
import { fetchShops, getShopById } from "../actions/shop";
import { useNavigate } from "react-router-dom";
import { removeObject } from "../utils";

class Switch extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      shopId: ''
    }
  }

  onShopChange = (shopId) => {
    this.setState({ shopId });
  }

  componentDidMount = () => {
    this.props.dispatch(fetchShops({ username: localStorage.getItem("username") }));
  }

  onClickAuth = () => {
    const {
      shopReducer = []
    } = this.props
    if (this.state.shopId.trim() != '') {
      window.location.href = `/auth?shopId=${this.state.shopId}`;
    } else {
      alert("You must select a shop first.")
      return;
    }
  }

  onLogout = () => {
    removeObject("username");
    removeObject("rol");
    removeObject("token");
    window.location.href = `/`
  }


  render() {
    const {
      shopReducer = []
    } = this.props

    const { shops } = shopReducer;
    return (
      <Grid container className="center-aligned-child shopsLayout pb-4">
        <Grid
          item
          container
          xs={1}
          sx={{ backgroundColor: 'rgb(12,183,231)' }}
          justifyContent={'center'}
        >
          <Button onClick={this.onClickAuth}>
            <Settings sx={{ color: 'white' }} />
          </Button>
        </Grid>
        <Grid
          container
          item
          xs={1}
          sx={{ backgroundColor: 'rgb(12,183,231)', marginLeft: 'auto', marginRight: 0 }}
          justifyContent={'center'}
          justifySelf={'end'}
        >
          <Button><PowerSettingsNew onClick={this.onLogout} sx={{ color: 'white' }} /></Button>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sx={{ paddingLeft: 10, paddingTop: 5, paddingRight: 10 }}
        >
          <Typography variant="h4">
            Total Locations: {shops.length}
          </Typography>
        </Grid>
        <Grid
          item
          container
          xs={12}
          sx={{ paddingLeft: 10, paddingTop: 5, paddingRight: 10 }}
        >
          <Grid container item lg={12}>
            {shops.length > 0 &&
              shops.map((shop, idx) => {
                return (
                  <Grid
                    item xs={2}
                    key={idx}
                  >
                    <Paper
                      style={{
                        width: 150,
                        height: 200
                      }}
                      elevation={8}
                      className={` ${this.state.shopId === shop.id ? 'selectedShopBg' : ''}`}
                      onClick={() => this.onShopChange(shop.id)}>
                      <div>
                        <img
                          style={{
                            width: 150,
                            height: 150
                          }}
                          alt=""
                          src="/assets/img/cannabis.jpg" />
                      </div>
                      <Typography align="center">{shop.name}</Typography>
                    </Paper>
                    {/* {this.state.shopId === shop.id && shop.appTarget === 'Grow' ? <Fragment><Button data-cy='btn-shop-operation' variant="raised" className={shop.appTarget} style={{ marginTop: 20 }} onClick={this.goToGrowOperations.bind(this, shop)}>Operations</Button><Button data-cy='btn-shop-sales' variant="raised" className={shop.appTarget} style={{ marginTop: 20, marginLeft: 4 }} onClick={this.goToShop.bind(this, shop)}>Sales</Button></Fragment> : null}
                    {this.state.shopId === shop.id && shop.appTarget !== 'Grow' ? <Button data-cy='btn-shop-location' variant="raised" className={shop.appTarget} style={{ marginTop: 20 }} onClick={this.goToShop.bind(this, shop)}>Go to Location</Button> : null} */}
                  </Grid>
                )
              })
            }
          </Grid>
        </Grid>

      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state };
}

export default connect(mapStateToProps)(Switch)