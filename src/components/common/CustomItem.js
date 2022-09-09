import { Grid, ListItem, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

class CustomItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { text, label, type } = this.props;

        return (
            <ListItem>
                <Grid
                    container
                >
                    <Grid item xs={6}>
                        {label}
                    </Grid>
                    <Grid item xs={6}>
                        {
                            type === "text" ?
                                <Typography>{text}</Typography>
                                :
                                <img
                                    style={{
                                        width: 150,
                                        height: 150
                                    }}
                                    alt=""
                                    src="/assets/img/cannabis.jpg" />
                        }

                    </Grid>
                </Grid>
            </ListItem>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(CustomItem)