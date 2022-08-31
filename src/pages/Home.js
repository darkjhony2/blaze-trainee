import { Grid, Button, Typography } from "@mui/material"
import { Settings, PowerSettingsNew } from '@mui/icons-material'
import React from "react"

export class Home extends React.Component {

  render() {
    return (
      <Grid container>
        <Grid
          container
          xs={'1'}
          sx={{ backgroundColor: 'rgb(12,183,231)' }}
          justifyContent={'center'}
        >
          <Button><Settings sx={{ color: 'white' }} /></Button>
        </Grid>
        <Grid
          container
          xs={'1'}
          sx={{ backgroundColor: 'rgb(12,183,231)', marginLeft: 'auto', marginRight: 0 }}
          justifyContent={'center'}
          justifySelf={'end'}
        >
          <Button><PowerSettingsNew sx={{ color: 'white' }} /></Button>
        </Grid>
        <Grid
          container
          xs={'12'}
          sx={{ paddingLeft: 10, paddingTop: 5, paddingRight: 10 }}
        >
          <Typography>
            <h2>Total Locations</h2>
          </Typography>
        </Grid>

      </Grid>
    )
  }
}
