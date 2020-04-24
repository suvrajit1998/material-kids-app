import React from 'react'

import { Grid, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
    marginBottom: 50,
    display: 'flex',
    justifyContent: 'space-between',
  },
}))

export const TabPanel_2 = () => {
  const classes = useStyles()
  return (
    <div>
      <Grid item container className={classes.root}>
        <Grid item xs={12} sm={12} md={5}>
          <Grid item container>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              style={{ paddingLeft: 15, paddingRight: 15 }}
            >
              <a href="#any" style={{ width: '100%' }}>
                <img
                  alt="modal"
                  src="https://i.ibb.co/9gqWFbF/camp.jpg"
                  style={{
                    width: '100%',
                    borderRadius: 6,
                  }}
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              style={{ paddingLeft: 15, paddingRight: 15 }}
            >
              <div
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                <Typography
                  variant="h6"
                  style={{ fontFamily: 'Roboto Slab', color: '#303030' }}
                >
                  Gigi Hadid
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: 20, marginBottom: 20 }}
                >
                  MODEL
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: 20, color: '#BBBBBB' }}
                >
                  French luxury footwear and fashion. The footwear has
                  incorporated shiny, red-lacquered soles that have become his
                  signature.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Grid item container>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              style={{ paddingLeft: 15, paddingRight: 15 }}
            >
              <a href="#any" style={{ width: '100%' }}>
                <img
                  alt="modal"
                  src="https://i.ibb.co/tsdyz56/marc.jpg"
                  style={{
                    width: '100%',
                    borderRadius: 6,
                  }}
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              style={{ paddingLeft: 15, paddingRight: 15 }}
            >
              <div
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                <Typography
                  variant="h6"
                  style={{ fontFamily: 'Roboto Slab', color: '#303030' }}
                >
                  Marc Jacobs
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: 20, marginBottom: 20 }}
                >
                  DESIGNER
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: 20, color: '#BBBBBB' }}
                >
                  French luxury footwear and fashion. The footwear has
                  incorporated shiny, red-lacquered soles that have become his
                  signature.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item container className={classes.root}>
        <Grid item xs={12} sm={12} md={5}>
          <Grid item container>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              style={{ paddingLeft: 15, paddingRight: 15 }}
            >
              <a href="#any" style={{ width: '100%' }}>
                <img
                  alt="modal"
                  src="https://i.ibb.co/tP0jrrb/kendall.jpg"
                  style={{
                    width: '100%',
                    borderRadius: 6,
                  }}
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              style={{ paddingLeft: 15, paddingRight: 15 }}
            >
              <div
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                <Typography
                  variant="h6"
                  style={{ fontFamily: 'Roboto Slab', color: '#303030' }}
                >
                  Kendall Jenner
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: 20, marginBottom: 20 }}
                >
                  MODEL
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: 20, color: '#BBBBBB' }}
                >
                  French luxury footwear and fashion. The footwear has
                  incorporated shiny, red-lacquered soles that have become his
                  signature.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Grid item container>
            <Grid
              item
              xs={12}
              sm={12}
              md={5}
              style={{ paddingLeft: 15, paddingRight: 15 }}
            >
              <a href="#any" style={{ width: '100%' }}>
                <img
                  alt="modal"
                  src="https://i.ibb.co/WxBtx0z/card-profile2-square.jpg"
                  style={{
                    width: '100%',
                    borderRadius: 6,
                  }}
                />
              </a>
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={7}
              style={{ paddingLeft: 15, paddingRight: 15 }}
            >
              <div
                style={{
                  paddingTop: 5,
                  paddingBottom: 5,
                  paddingLeft: 2,
                  paddingRight: 2,
                }}
              >
                <Typography
                  variant="h6"
                  style={{ fontFamily: 'Roboto Slab', color: '#303030' }}
                >
                  George West
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: 20, marginBottom: 20 }}
                >
                  MODEL/DJ
                </Typography>
                <Typography
                  variant="body2"
                  style={{ marginTop: 20, color: '#BBBBBB' }}
                >
                  French luxury footwear and fashion. The footwear has
                  incorporated shiny, red-lacquered soles that have become his
                  signature.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
