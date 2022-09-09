
import { Box, Collapse, List } from '@mui/material'
import React from 'react'
import { connect } from 'react-redux';
import { settingsTabs } from '../../utils';
import ListItemLink from './ListItemLink';

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    onClick = (open) => {
        this.setState({ open: !this.state.open })
    }

    render() {

        const {onChangePage} = this.props

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
                                                <ListItemLink url = {tab.url} icon={tab.icon} key={idx} label={tab.title} />
                                            </>
                                            :
                                            <>
                                                <ListItemLink url = {tab.url} icon={tab.icon} label={tab.title} key={idx} open={this.state.open} onClick={this.onClick} />
                                                <Collapse key={idx} component="li" in={this.state.open} timeout="auto" unmountOnExit>
                                                    {
                                                        tab.childrenList.map((child, index) => {
                                                            return (
                                                                <List key={index} disablePadding>
                                                                    <ListItemLink onChangePage = {onChangePage} url = {child.url} icon={child.icon} label={child.title} sx={{ pl: 4 }} />
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