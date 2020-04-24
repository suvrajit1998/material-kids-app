import React from 'react'

import { Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'auto',
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 100,
  },
  subRoot: {
    width: '100%',
    position: 'relative',
    minHeight: 1,
    paddingLeft: 15,
    paddingRight: 15,
  },
  imageStyle: {
    width: '100%',
    marginBottom: '1.1rem',
  },
}))

export const TabPanel_3 = () => {
  const classes = useStyles()
  return (
    <Grid item container className={classes.root}>
      <Grid item xs={12} sm={12} md={3} className={classes.subRoot}>
        <img
          alt="media"
          src="https://i.ibb.co/X2Kg8zK/studio-1.jpg"
          className={classes.imageStyle}
        />
        <img
          alt="media"
          src="https://i.ibb.co/mNR9x1x/clem-onojegaw.jpg"
          className={classes.imageStyle}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={3} className={classes.subRoot}>
        <img
          alt="media"
          src="https://i.ibb.co/qyJkC21/cynthia-del-rio.jpg"
          className={classes.imageStyle}
        />
        <img
          alt="media"
          src="https://i.ibb.co/8DWvWqD/studio-4.jpg"
          className={classes.imageStyle}
        />
        <img
          alt="media"
          src="https://i.ibb.co/n7mzPt1/olu-eletu.jpg"
          className={classes.imageStyle}
        />
      </Grid>
    </Grid>
  )
}
