import React, { useState } from 'react'

import { withRouter } from 'react-router-dom'

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  makeStyles,
  Button,
  useScrollTrigger,
  Slide,
  Hidden,
  Drawer,
  Divider,
  List,
  ListItem,
} from '@material-ui/core'

import { Menu } from '@material-ui/icons'

// import { orange } from '@material-ui/core/colors'

const HideOnScroll = (props) => {
  const { window, children } = props

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    threshold: 300,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: { flexGrow: 1 },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
}))

const Header = (props) => {
  const [openMobile, setopenMobile] = useState(false)
  const classes = useStyles()
  const { history } = props

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem>
          <Button
            variant="contained"
            color="inherit"
            style={{ marginRight: 10 }}
            onClick={() => {
              history.push('/')
            }}
          >
            Home
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="inherit"
            style={{ marginRight: 10 }}
            onClick={() => {
              history.push('/aboutus')
            }}
          >
            About Us
          </Button>
        </ListItem>
        <ListItem>
          <Button
            variant="contained"
            color="inherit"
            style={{ marginRight: 10 }}
            onClick={() => {
              history.push('/connect')
            }}
          >
            Connect
          </Button>
        </ListItem>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <HideOnScroll {...props}>
        <AppBar color="inherit">
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              onClick={() => {
                history.push('/')
              }}
            >
              Material Kit
            </Typography>
            <Hidden smDown>
              <div>
                <Button
                  variant="contained"
                  color="inherit"
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    history.push('/')
                  }}
                >
                  Home
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    history.push('/aboutus')
                  }}
                >
                  About Us
                </Button>
                <Button
                  variant="contained"
                  color="inherit"
                  style={{ marginRight: 10 }}
                  onClick={() => {
                    history.push('/connect')
                  }}
                >
                  Connect
                </Button>
              </div>
            </Hidden>
            <Hidden mdUp>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => setopenMobile(!openMobile)}
              >
                <Menu />
              </IconButton>
            </Hidden>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        variant="temporary"
        anchor="right"
        open={openMobile}
        onClose={() => setopenMobile(!openMobile)}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </div>
  )
}

export default withRouter(Header)
