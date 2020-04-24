import React from 'react'

import {
  Grid,
  Typography,
  Card,
  CardMedia,
  makeStyles,
  Backdrop,
  Fab,
  Button,
  Divider,
} from '@material-ui/core'

// import { orange } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  cardRoot: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
    position: 'absolute',
  },
}))

export const TabPanel_1 = () => {
  const classes = useStyles()
  return (
    <Grid
      item
      container
      style={{
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 40,
        marginBottom: 40,
      }}
    >
      <Grid item md={8} sm={12} xs={12}>
        <Typography
          variant="h6"
          style={{ fontFamily: 'Roboto Slab', color: '#303030' }}
        >
          Latest Collections
        </Typography>
        <Grid item container style={{ width: 'auto', marginTop: 20 }}>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{
              width: '100%',
              position: 'relative',
              height: 340,
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Card className={classes.cardRoot}>
              <CardMedia
                image="https://i.ibb.co/RHQj70G/mariya-georgieva.jpg"
                alt="mariya-georgieva"
                border="0"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <Backdrop className={classes.backdrop} open={true}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Fab variant="extended" size="small" color="primary">
                    Spring 2016
                  </Fab>
                  <Button color="inherit" size="large">
                    Stilleo
                  </Button>
                </div>
              </Backdrop>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{
              width: '100%',
              position: 'relative',
              height: 340,
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Card className={classes.cardRoot}>
              <CardMedia
                image="https://i.ibb.co/1Qy9kQS/clem-onojeghuo.jpg"
                alt="clem-onojeghuo"
                border="0"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <Backdrop className={classes.backdrop} open={true}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Fab variant="extended" size="small" color="secondary">
                    Spring 2018
                  </Fab>
                  <Button color="inherit" size="large">
                    High Heels
                  </Button>
                </div>
              </Backdrop>
            </Card>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{
              width: '100%',
              position: 'relative',
              height: 340,
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Card className={classes.cardRoot}>
              <CardMedia
                image="https://i.ibb.co/6Rhw4LP/olu-eletu.jpg"
                alt="olu-eletu"
                border="0"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <Backdrop className={classes.backdrop} open={true}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Fab variant="extended" size="small" color="secondary">
                    SUMMER 2018
                  </Fab>
                  <Button color="inherit" size="large">
                    Flatss
                  </Button>
                </div>
              </Backdrop>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            style={{
              width: '100%',
              position: 'relative',
              height: 340,
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            <Card className={classes.cardRoot}>
              <CardMedia
                image="https://i.ibb.co/KhPXjGQ/studio-4.jpg"
                alt="clem-onojeghuo"
                border="0"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              <Backdrop className={classes.backdrop} open={true}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Fab variant="extended" size="small" color="primary">
                    WINTER 2018
                  </Fab>
                  <Button color="inherit" size="large">
                    Men's Sneakers
                  </Button>
                </div>
              </Backdrop>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        md={4}
        sm={12}
        xs={12}
        style={{ paddingLeft: 30, paddingRight: 30 }}
      >
        <Typography
          variant="h6"
          style={{ fontFamily: 'Roboto Slab', color: '#303030' }}
        >
          Stats
        </Typography>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: 40,
            marginBottom: 30,
          }}
        >
          <Typography
            variant="body2"
            style={{ marginBottom: 10, letterSpacing: 1, fontSize: 15 }}
          >
            <span style={{ fontWeight: 'bold', marginRight: 5 }}>60</span>
            Products
          </Typography>
          <Typography
            variant="body2"
            style={{ marginBottom: 10, letterSpacing: 1, fontSize: 15 }}
          >
            <span style={{ fontWeight: 'bold', marginRight: 5 }}>4</span>
            Collections
          </Typography>
          <Typography
            variant="body2"
            style={{ marginBottom: 10, letterSpacing: 1, fontSize: 15 }}
          >
            <span style={{ fontWeight: 'bold', marginRight: 5 }}>331</span>
            Influencers
          </Typography>
          <Typography
            variant="body2"
            style={{ marginBottom: 10, letterSpacing: 1, fontSize: 15 }}
          >
            <span style={{ fontWeight: 'bold', marginRight: 5 }}>1.2k</span>
            Likes
          </Typography>
        </div>
        <Divider style={{ marginBottom: 20 }} />
        <Typography
          variant="h6"
          style={{ fontFamily: 'Roboto Slab', color: '#303030' }}
        >
          About this work
        </Typography>
        <Typography
          variant="body2"
          style={{ marginTop: 20, color: '#BBBBBB', padding: 20 }}
        >
          French luxury footwear and fashion. The footwear has incorporated
          shiny, red-lacquered soles that have become his signature.
        </Typography>
        <Divider style={{ marginBottom: 20 }} />
        <Typography
          variant="h6"
          style={{ fontFamily: 'Roboto Slab', color: '#303030' }}
        >
          Focus
        </Typography>
        <div
          style={{
            marginTop: 30,
            width: '100%',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <Fab size="small" variant="extended" color="secondary">
            FOOTWEAR
          </Fab>
          <Fab size="small" variant="extended" color="primary">
            LUXURY
          </Fab>
        </div>
      </Grid>
    </Grid>
  )
}
