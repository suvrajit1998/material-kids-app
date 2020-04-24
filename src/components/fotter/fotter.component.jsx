import React from 'react'

import { Grid, makeStyles, Typography, Fab } from '@material-ui/core'

const useStyle = makeStyles((theme) => ({
  root: {
    background: '#ffffff',
    textAlign: 'center',
    paddingTop: '.9rem',
    paddingBottom: '.9rem',
  },
  subRoot: {
    width: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 15,
    paddingRight: 15,
  },
}))

export const Fotter = () => {
  const classes = useStyle()
  return (
    <div className={classes.root}>
      <div className={classes.subRoot}>
        <Grid
          item
          container
          style={{
            width: 'auto',
            marginLeft: -15,
            marginRight: -15,
            justifyContent: 'center',
          }}
        >
          <Grid
            item
            md={12}
            style={{
              width: '100%',
              position: 'relative',
              minHeight: 1,
              paddingLeft: 15,
              paddingRight: 15,
            }}
          >
            <Typography
              variant="h6"
              style={{
                fontFamily: 'Roboto Slab',
                marginTop: 40,
                marginBottom: 40,
              }}
            >
              Thank You for your support!
            </Typography>
          </Grid>

          <Fab
            variant="extended"
            color="primary"
            style={{ marginRight: 5, marginBottom: 5 }}
          >
            <i
              className="fab fa-facebook-square"
              style={{ fontSize: 18, paddingRight: 10 }}
            />
            FACEBOOK
          </Fab>
          <Fab
            variant="extended"
            style={{
              background: '#55ACEE',
              color: '#fff',
              marginRight: 5,
              marginBottom: 5,
            }}
          >
            <i
              className="fab fa-twitter-square"
              style={{ fontSize: 18, paddingRight: 10 }}
            />
            TWITTER
          </Fab>
          <Fab
            variant="extended"
            style={{
              background: '#DD4B39',
              color: '#fff',
              marginRight: 5,
              marginBottom: 5,
            }}
          >
            <i
              className="fab fa-google-plus-g"
              style={{ fontSize: 18, paddingRight: 10 }}
            />
            google+
          </Fab>
          <Fab
            variant="extended"
            style={{
              background: 'gray',
              color: '#fff',
              marginRight: 5,
              marginBottom: 5,
            }}
          >
            <i
              className="fab fa-github-square"
              style={{ fontSize: 18, paddingRight: 10 }}
            />
            github
          </Fab>
        </Grid>
      </div>
    </div>
  )
}
