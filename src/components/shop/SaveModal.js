import { Box, Button, Grid, Modal, Typography } from '@mui/material';
import React from 'react'
import { connect } from 'react-redux';
import { saveShop } from '../../actions/shop';
import { getObject } from '../../utils';
import CustomItem from '../common/CustomItem';


class SaveModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            saveMode: true,
            shop: {
                name: '',
                description: '',
                email: '',
                phoneNumber: '',
                license: '',
                shopType: '',
                showWalkInQueue: false,
                showDeliveryQueue: false,
                showOnlineQueue: false,
                showSpecialQueue: false,
                enableCashInOut: false,
                active: true,
                enableSaleLogout: false
            },
            address: {
                address: '',
                city: '',
                state: '',
                zipCode: '',
                country: ''
            },
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

    onSave = () => {
        let data = this.state.shop;
        data.address = this.state.address;
        data.companyId = getObject("companyId");
        this.props.dispatch(saveShop(data));
        this.props.onCloseModal();
        window.location.href = "/switch"
    }

    render() {

        console.log(this.state.shop)

        const { openModal, onCloseModal, modalTitle } = this.props;

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '60%',
            bgcolor: 'background.paper',
            border: '2px solid #000',
            height: '80%',
            boxShadow: 24,
            background: "absolute",
            overflowY: 'scroll',
            p: 4,
        };

        return (
            <div>
                <Modal
                    open={openModal}
                    onClose={onCloseModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography sx={{ marginBottom: 5 }} id="modal-modal-title" variant="h6" component="h2">
                            {modalTitle}
                        </Typography>
                        <CustomItem value={this.state.shop && this.state.shop.name} label={"Shop Name"} type={"text"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"name"} />
                        <CustomItem value={this.state.shop && this.state.shop.shopType} label={"Shop Type"} type={"text"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"shopType"} />
                        <CustomItem value={this.state.shop && this.state.shop.email} label={"Email"} type={"text"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"email"} />
                        <CustomItem value={this.state.shop && this.state.shop.phoneNumber} label={"Phone"} type={"text"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"phoneNumber"} />
                        <CustomItem value={this.state.shop && this.state.shop.license} label={"Shop License"} type={"text"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"license"} />
                        <CustomItem value={this.state.address && this.state.address.country} label={"Country"} type={"text"} saveMode={this.state.saveMode} onChange={this.onChangeAddress} textName={"country"} />
                        <CustomItem value={this.state.address && this.state.address.address} label={"Address"} type={"text"} saveMode={this.state.saveMode} onChange={this.onChangeAddress} textName={"address"} />
                        <CustomItem value={this.state.address && this.state.address.city} label={"City"} type={"text"} saveMode={this.state.saveMode} onChange={this.onChangeAddress} textName={"city"} />
                        <CustomItem value={this.state.address && this.state.address.zipCode} label={"Zip Code"} type={"text"} saveMode={this.state.saveMode} onChange={this.onChangeAddress} textName={"zipCode"} />
                        <CustomItem value={this.state.address && this.state.address.state} label={"State"} type={"text"} saveMode={this.state.saveMode} onChange={this.onChangeAddress} textName={"state"} />
                        <CustomItem value={this.state.shop && this.state.shop.showWalkInQueue} label={"Show Walk In Queue"} type={"boolean"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"showWalkInQueue"} />
                        <CustomItem value={this.state.shop && this.state.shop.showDeliveryQueue} label={"Show Delivery Queuee"} type={"boolean"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"showDeliveryQueue"} />
                        <CustomItem value={this.state.shop && this.state.shop.showOnlineQueue} label={"Show Online Queue"} type={"boolean"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"showOnlineQueue"} />
                        <CustomItem value={this.state.shop && this.state.shop.showSpecialQueue} label={"Show Special Queue"} type={"boolean"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"showSpecialQueue"} />
                        <CustomItem value={this.state.shop && this.state.shop.enableCashInOut} label={"Enable Cash In Out"} type={"boolean"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"enableCashInOut"} />
                        <CustomItem value={this.state.shop && this.state.shop.active} label={"Status"} type={"boolean"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"active"} />
                        <CustomItem value={this.state.shop && this.state.shop.enableSaleLogout} label={"Sale Logout"} type={"boolean"} saveMode={this.state.saveMode} onChange={this.onChange} textName={"enableSaleLogout"} />
                        <Button
                            variant="contained"
                            sx={{ marginLeft: '92%', marginTop: 2, marginRight: 0, backgroundColor: 'rgb(12,183,231)', color: 'white' }}
                            onClick={this.onSave}
                        >
                            Save
                        </Button>
                    </Box>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(SaveModal)