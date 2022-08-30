import { Grid, Button } from "@mui/material"
import { Home as HomeIcon, PowerOff } from '@mui/icons-material'
import { PureComponent } from "react"

export class Home extends PureComponent {

  render() {
    return (
      <Grid container>
        <Grid
          container
          xs={'1'}
          sx={{ backgroundColor: 'rgb(12,183,231)' }}
          justifyContent={'center'}
        >
          <Button><HomeIcon sx={{ color: 'white' }} /></Button>
        </Grid>
        <Grid
          container
          xs={'1'}
          sx={{ backgroundColor: 'rgb(12,183,231)', marginLeft: 'auto', marginRight: 0 }}
          justifyContent={'center'}
          justifySelf={'end'}
        >
          <Button><PowerOff sx={{ color: 'white' }} /></Button>
        </Grid>

      </Grid>
    )
  }
}
