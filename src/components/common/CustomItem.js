import { Grid, ListItem, Switch, TextField, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getBooleanTranslation } from "../../utils/util";

class CustomItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { label, type, editMode, value, onChange, textName } = this.props;

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
                                <>
                                    {
                                        editMode && editMode ?
                                            <Grid xs={4}>
                                                <TextField
                                                    type={type}
                                                    name={textName}
                                                    onChange={e => onChange(e, type)}
                                                    value={value}
                                                    fullWidth />
                                            </Grid>
                                            :
                                            <Typography>{value}</Typography>
                                    }
                                </>
                                :
                                <>
                                    {
                                        type === "boolean" ?
                                            <>
                                                {
                                                    editMode && editMode ?
                                                        <Switch
                                                            checked={value}
                                                            onChange={e => onChange(e, type)}
                                                            inputProps={{ 'aria-label': 'controlled' }}
                                                            name={textName}
                                                        />
                                                        :
                                                        <Typography>{getBooleanTranslation(value)}</Typography>
                                                }
                                            </>

                                            :
                                            <>
                                                <img
                                                    style={{
                                                        width: 150,
                                                        height: 150
                                                    }}
                                                    alt=""
                                                    src="/assets/img/cannabis.jpg" />
                                            </>
                                    }
                                </>

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