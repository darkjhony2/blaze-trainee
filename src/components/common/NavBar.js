
import { Box, Collapse, List } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux';
import { settingsTabs } from '../../utils';
import ListItemLink from './ListItemLink';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            selectedIndex: -1
        }
    }

    onClick = (index) => {
        this.setState({
            selectedIndex: this.state.selectedIndex === index ? -1 : index
        })
    }

    render() {

        const { onChangePage } = this.props

        return (
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    mt: 1,
                }}
                component="nav"
                aria-label="mailbox folders"
            >
                <List>
                    {
                        settingsTabs.map((tab, idx) => {
                            return (
                                <>
                                    {
                                        tab.childrenList.length <= 0 ?
                                            <>
                                                <ListItemLink url={tab.url} icon={tab.icon} key={idx} label={tab.title} />
                                            </>
                                            :
                                            <>
                                                <ListItemLink url={tab.url} icon={tab.icon} label={tab.title} key={idx} open={idx === this.state.selectedIndex} onClick={() => this.onClick(idx)} />
                                                <Collapse key={idx} component="li" in={idx === this.state.selectedIndex} timeout="auto" unmountOnExit>
                                                    {
                                                        tab.childrenList.map((child, index) => {
                                                            return (
                                                                <List key={index} disablePadding>
                                                                    <ListItemLink onChangePage={onChangePage} url={child.url} icon={child.icon} label={child.title} sx={{ pl: 4 }} />
                                                                </List>
                                                            )
                                                        })
                                                    }
                                                </Collapse>
                                            </>
                                    }
                                </>
                            )
                        })
                    }
                </List>
            </Box>
        )
    }
}

const mapStateToProps = (state) => {
    return { ...state };
}

export default connect(mapStateToProps)(Navbar)