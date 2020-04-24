import React from 'react'

import { Paper, Typography, Grid, makeStyles } from '@material-ui/core'

import { Apps, ViewDay, ViewCarousel } from '@material-ui/icons'

import './features.style.scss'
import { UnconventionalCards } from '../unconventional-cards/unconventional-cards.component'
import { ContectArears } from '../contact-Areas/contect-area.component'
import { BasicComponents } from '../basic-components/basic-component'

const useStyles = makeStyles({
  Grid: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  mainGrid: {
    display: 'flex',
    justifyContent: 'center',
    width: '90%',
    height: '40%',
    margin: 'auto',
    marginBottom: '20%',
  },
  primeTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
})

export const Features = () => {
  const classes = useStyles()
  return (
    <div className="features">
      <Paper>
        <div className={classes.primeTitle}>
          <Grid item md={7} sm={7} xs={12}>
            <Typography variant="h5" className="primary-title">
              Material Kit with a fresh, new design inspired by Google's
              Material Design You asked for it, so we built it. It's a great
              pleasure to introduce to you the material concepts in an easy to
              use and beautiful set of components.
            </Typography>
          </Grid>
        </div>
        <Grid item container className={classes.mainGrid}>
          <Grid item md={4} sm={4}>
            <div className={classes.Grid}>
              <Apps className="icon" color="secondary" />
              <Typography variant="h6">Huge Number of Components</Typography>
              <Typography variant="body2" className="titlebody">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                take variations in colour.
              </Typography>
            </div>
          </Grid>
          <Grid item md={4} sm={4}>
            <div className={classes.Grid}>
              <ViewDay className="icon" color="primary" />
              <Typography variant="h6">Multi-Purpose Sections</Typography>
              <Typography variant="body2" className="titlebody">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                take variations in colour.
              </Typography>
            </div>
          </Grid>
          <Grid item md={4} sm={4}>
            <div className={classes.Grid}>
              <ViewCarousel className="icon" color="secondary" />
              <Typography variant="h6">Example Pages</Typography>
              <Typography variant="body2" className="titlebody">
                Every element that you need in a product comes built in as a
                component. All components fit perfectly with each other and can
                take variations in colour.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <BasicComponents />
        <UnconventionalCards />
        <ContectArears />
      </Paper>
    </div>
  )
}
