import React from 'react'

import { Typography, Grid, makeStyles } from '@material-ui/core'

import './basic-component.style.scss'

const useStylae = makeStyles({
  Grid: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
})

export const BasicComponents = () => {
  const classes = useStylae()
  return (
    <Grid item container className="basic-components">
      <Grid item xs={12} sm={12} md={5} className={classes.Grid}>
        <Typography style={{ fontFamily: 'Roboto Slab' }} variant="h5">
          Basic Components
        </Typography>
        <Typography
          variant="caption"
          style={{ marginTop: '1rem', fontWeight: 'bold' }}
        >
          THE CORE ELEMENTS OF YOUR WEBSITE
        </Typography>

        <Typography variant="caption" className="titlebody">
          We re-styled every Bootstrap element to make it resemble Material
          Design and also fit with each other. All the Bootstrap components that
          you need in a development have been re-design with the new look.
          Besides the numerous basic elements, we have also created additional
          classes. All these items will help you take your project to the next
          level.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={7} className="jass">
        <div className="jass-image" />
      </Grid>
    </Grid>
  )
}
