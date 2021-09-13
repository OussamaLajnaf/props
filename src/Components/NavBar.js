
import React from 'react'
import createTypography from '@material-ui/core/styles/createTypography'
import { AppBar, IconButton, Toolbar,Button, } from '@material-ui/core'

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
  <Toolbar>
    <IconButton edge="start" className={"classes".menuButton} color="inherit" aria-label="menu">
      
    </IconButton>
    <createTypography variant="h6" className={"classes".title}>
      Shopping online
    </createTypography>
    <Button color="inherit">Login</Button>
  </Toolbar>
</AppBar>
        </div>
    )
}

export default NavBar
