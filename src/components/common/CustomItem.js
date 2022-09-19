import { Grid, ListItem, Switch, TextField, Typography } from "@mui/material";
import React from "react";
import { connect } from "react-redux";
import { getBooleanTranslation } from "../../utils/util";

class CustomItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { label, type, editMode, value, onChange, textName, saveMode } = this.props;

        return (
            <ListItem>
                <Grid
                    container
                >
                    <Grid item xs={6}>
                        {label}
                    </Grid>
                    <Grid item xs={6} container>
                        {
                            type === "text" ?
                                <>
                                    {
                                        editMode || saveMode && editMode || saveMode ?
                                            <Grid item xs={saveMode ? 8 : 4} sx={saveMode ? { marginLeft: 'auto', marginRight: 0 } : ''}>
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
                                                    editMode || saveMode && editMode || saveMode ?
                                                        <>
                                                            <Switch
                                                                checked={value}
                                                                onChange={e => onChange(e, type)}
                                                                inputProps={{ 'aria-label': 'controlled' }}
                                                                name={textName}
                                                                sx={saveMode ? { marginLeft: '85%', marginRight: '0px' } : ''}
                                                            />
                                                        </>
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