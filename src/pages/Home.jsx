import { Grid, Button } from "@mui/material"
import { Home as HomeIcon, PowerOff } from '@mui/icons-material'

export const Home = () => {
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
        <Button><PowerOff sx={{ color: 'white' }}/></Button>
      </Grid>

    </Grid>
  )
}
