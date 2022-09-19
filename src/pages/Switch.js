import { Grid, Button, Typography, Paper, IconButton } from "@mui/material"
import { Settings, PowerSettingsNew, Add } from '@mui/icons-material'
import React from "react"
import { connect } from "react-redux";
import { fetchShops } from "../actions/shop";
import { getObject, removeObject, saveObject } from "../utils";
import SaveModal from "../components/shop/SaveModal";

class Switch extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      shopId: '',
      openModal: false
    }
  }

  onOpenModal = () => {
    this.setState({
      openModal: true
    })
  };

  onCloseModal = () => {
    this.setState({
      openModal: false
    })
  };

  onShopChange = (shopId, shopName) => {
    this.setState({ shopId });
    removeObject("shopId");
    removeObject("shopName");
    saveObject("shopId", shopId);
    saveObject("shopName", shopName);
  }

  componentDidMount = () => {
    this.props.dispatch(fetchShops({ username: localStorage.getItem("username") }));
  }

  onClickAuth = () => {
    if (getObject("shopId") != '' && getObject("shopId") != null) {
      window.location.href = `/settings`;
    } else {
      alert("You must select a shop first.")
      return;
    }
  }

  onLogout = () => {
    removeObject("username");
    removeObject("rol");
    removeObject("token");
    removeObject("shopId");
    removeObject("companyId");
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
                    item xs={12} sm ={4} md={3} lg={2}
                    sx={{marginTop: 1}}
                    key={idx}
                  >
                    <Paper
                      style={{
                        width: 150,
                        height: 200
                      }}
                      elevation={20}
                      className={` ${this.state.shopId === shop.id ? 'selectedShopBg' : ''}`}
                      onClick={() => this.onShopChange(shop.id, shop.name)}>
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
            <Grid
              item xs={2}
              container
              sx={{marginTop: 1}}
            >
              <Paper
                style={{
                  width: 150,
                  height: 200
                }}
                elevation={20}>
                <div style={{ minWidth: 150, minHeight: 200 }} >
                  <IconButton onClick={this.onOpenModal} sx={{ minWidth: 150, minHeight: 140 }} aria-label="add">
                    <Add style={{ minWidth: 120, minHeight: 140 }} />
                  </IconButton>
                  <Typography style={{ marginLeft: 13 }}>Create New Shop</Typography>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <SaveModal openModal = {this.state.openModal} onCloseModal = {this.onCloseModal} modalTitle = {"New Shop"} />
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return { ...state };
}

export default connect(mapStateToProps)(Switch)