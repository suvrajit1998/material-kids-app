import React from 'react'

import {
  Paper,
  makeStyles,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
} from '@material-ui/core'

import { Phone, PinDrop, BusinessCenter } from '@material-ui/icons'

import './featuresBox.style.scss'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'relative',
    top: -100,
    height: '100%',
  },
  formStyle: {
    padding: 10,
    marginBottom: 30,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputStyle: {
    width: '90%',
    marginBottom: 30,
  },
}))

export const FeaturesBox = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Paper>
        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
          <Typography
            variant="h4"
            style={{
              fontFamily: 'Roboto Slab',
              marginTop: 50,
              marginBottom: 50,
              paddingLeft: 30,
            }}
          >
            Send us a message
          </Typography>
        </div>
        <Grid item container>
          <Grid item xs={12} sm={6} md={6}>
            <Typography variant="body2" style={{ padding: 10 }}>
              You can contact us with anything related to our Products. We'll
              get in touch with you as soon as possible.
            </Typography>
            <form className={classes.formStyle}>
              <TextField
                id="connect"
                label="Your Name"
                color="secondary"
                className={classes.inputStyle}
              />
              <TextField
                id="connect"
                label="Email address"
                color="secondary"
                className={classes.inputStyle}
              />
              <TextField
                id="connect"
                label="Phone"
                color="secondary"
                className={classes.inputStyle}
              />
              <TextField
                id="connect"
                label="Your message"
                color="secondary"
                multiline
                rows="4"
                className={classes.inputStyle}
              />
              <Button
                color="secondary"
                variant="contained"
                style={{ maxWidth: 200 }}
              >
                Connect us
              </Button>
            </form>
          </Grid>
          <Grid item xs={12} sm={4} md={4} style={{ marginLeft: 'auto' }}>
            <Card
              style={{
                maxWidth: 360,
                paddingBottom: 10,
                marginBottom: 10,
                display: 'flex',
                marginRight: 20,
              }}
            >
              <PinDrop
                color="secondary"
                fontSize="large"
                style={{ margin: 10 }}
              />
              <div style={{ overflow: 'hiddne' }}>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: 'Roboto Slab',
                    fontSize: 18,
                    marginTop: 20,
                    marginBottom: 20,
                    paddingLeft: 10,
                  }}
                >
                  Find us at the office
                </Typography>
                <Typography
                  variant="body2"
                  style={{ padding: 10, paddingRight: 30 }}
                >
                  Bld Mihail Kogalniceanu, nr. 8, 7652 Bucharest, Romania
                </Typography>
              </div>
            </Card>
            <Card
              style={{
                maxWidth: 360,
                paddingBottom: 10,
                marginBottom: 10,
                display: 'flex',
                marginRight: 20,
              }}
            >
              <Phone
                color="secondary"
                fontSize="large"
                style={{ margin: 10 }}
              />
              <div style={{ overflow: 'hiddne' }}>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: 'Roboto Slab',
                    fontSize: 18,
                    marginTop: 20,
                    marginBottom: 20,
                    paddingLeft: 10,
                  }}
                >
                  Give us a ring
                </Typography>
                <Typography
                  variant="body2"
                  style={{ padding: 10, paddingRight: 30 }}
                >
                  Michael Jordan +40 762 321 762 Mon - Fri, 8:00-22:00
                </Typography>
              </div>
            </Card>
            <Card
              style={{
                maxWidth: 360,
                paddingBottom: 10,
                marginBottom: 10,
                display: 'flex',
                marginRight: 20,
              }}
            >
              <BusinessCenter
                color="secondary"
                fontSize="large"
                style={{ margin: 10 }}
              />
              <div style={{ overflow: 'hiddne' }}>
                <Typography
                  variant="h6"
                  style={{
                    fontFamily: 'Roboto Slab',
                    fontSize: 18,
                    marginTop: 20,
                    marginBottom: 20,
                    paddingLeft: 10,
                  }}
                >
                  Legal Information
                </Typography>
                <Typography
                  variant="body2"
                  style={{ padding: 10, paddingRight: 30 }}
                >
                  Creative Tim Ltd. VAT · EN2341241 IBAN · EN8732ENGB2300099123
                  Bank · Great Britain Bank
                </Typography>
              </div>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </div>
  )
}
