import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { ListItem, ListItemText, SvgIcon } from "@mui/material";
import React from 'react'
import { connect } from "react-redux";
import { removeObject } from "../../utils";


class ListItemLink extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick = () => {
        const { url, onChangePage } = this.props
        if (url === "switch") {
            window.location.href = url;
            removeObject("shopId");
        } else {
            onChangePage(url);
        }
    }

    render() {
        const { open, label, icon, url, ...other } = this.props;

        let expand = null;
        if (open != null) {
            expand = open ? <ExpandLess /> : <ExpandMore />;
        }

        return (
            <li>
                <ListItem onClick={this.onClick} button {...other}> &nbsp;
                    <SvgIcon component={icon} /> &nbsp;&nbsp;
                    {label}
                    <ListItemText />
                    {expand}
                </ListItem>
            </li>
        );
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(ListItemLink)