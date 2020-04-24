import React, { useState } from 'react'

import { Paper, Grid, makeStyles, Typography, Button } from '@material-ui/core'

import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@material-ui/lab'

import { GitHub, Twitter, Instagram, Favorite } from '@material-ui/icons'

import './profilefeatures.style.scss'
import { ProfileTabs } from '../profileTabs/profileTabs.component'

const useStyle = makeStyles({
  devSec: { margin: 'auto', display: 'block', position: 'relative' },
  bottunGroup: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  speedDail: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
})

const actions = [
  {
    icon: <i className="fab fa-facebook-square" style={{ fontSize: 18 }} />,
    name: 'facebook',
  },
  {
    icon: <i className="fab fa-twitter-square" style={{ fontSize: 18 }} />,
    name: 'twitter',
  },
  {
    icon: <i className="fab fa-google-plus-g" style={{ fontSize: 18 }} />,
    name: 'google',
  },
  {
    icon: <i className="fab fa-github-square" style={{ fontSize: 18 }} />,
    name: 'github',
  },
  { icon: <Favorite />, name: 'Like' },
]

export const ProfileFeature = () => {
  const classes = useStyle()
  const [open, setopen] = useState(false)

  const handleOpen = () => setopen(true)
  const handleClose = () => setopen(false)

  return (
    <div className="profileFeatures">
      <Paper>
        <Grid item md={7} sm={12} xs={12} className={classes.devSec}>
          <div className="developer">
            <div className="avater">
              <img
                src="https://i.ibb.co/4fgY5Ps/IMG-20170202-WA0077.jpg"
                alt="IMG-20170202-WA0077"
                border="0"
                className="avater-image"
              />
              <Typography
                variant="h5"
                color="inherit"
                style={{ fontFamily: 'Roboto Slab', marginTop: 40 }}
              >
                Suvrajit Naskar
              </Typography>
              <Typography
                variant="subtitle2"
                style={{
                  marginTop: '1rem',
                  fontWeight: 'bold',
                  color: '#808080',
                }}
              >
                DEVELOPER
              </Typography>
              <div className={classes.bottunGroup}>
                <Button variant="text">
                  <GitHub color="secondary" />
                </Button>
                <Button variant="text">
                  <Twitter color="primary" />
                </Button>
                <Button variant="text">
                  <Instagram color="secondary" />
                </Button>
              </div>
            </div>
          </div>
          <div
            style={{
              position: 'absolute',
              top: -320,
              right: 0,
              width: 100,
              height: 360,
            }}
          >
            <SpeedDial
              ariaLabel="speedDial openIcon Example"
              icon={<SpeedDialIcon />}
              open={open}
              onOpen={handleOpen}
              onClose={handleClose}
              className={classes.speedDail}
            >
              {actions.map((action) => (
                <SpeedDialAction
                  key={action.name}
                  icon={action.icon}
                  tooltipTitle={action.name}
                  onClick={handleClose}
                />
              ))}
            </SpeedDial>
          </div>
        </Grid>
        <Grid
          item
          md={7}
          sm={6}
          xs={9}
          style={{ marginRight: 'auto', marginLeft: 'auto', marginTop: 30 }}
        >
          <Typography
            variant="body2"
            style={{
              textAlign: 'center',
              color: '#808080',
              lineHeight: 2,
            }}
          >
            An artist of considerable range, Chet Faker — the name taken by
            Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and
            records all of his own music, giving it a warm, intimate feel with a
            solid groove structure.
          </Typography>
        </Grid>
        <ProfileTabs />
      </Paper>
    </div>
  )
}
