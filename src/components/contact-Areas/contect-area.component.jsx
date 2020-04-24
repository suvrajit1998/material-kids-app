import React from 'react'

import AOS from 'aos'

import 'aos/dist/aos.css'

import {
  Grid,
  Typography,
  Card,
  makeStyles,
  CardMedia,
} from '@material-ui/core'

import './content-area.style.scss'

const useStyles = makeStyles({
  card: {
    width: 250,
    height: 300,
    position: 'absolute',
    top: '20%',
    right: '5%',
  },
  cardProduct: {
    width: 300,
    height: 200,
    position: 'absolute',
    top: '45%',
    left: '5%',
  },
})

AOS.init({
  disable: false,
  startEvent: 'DOMContentLoaded',
  initClassName: 'aos-init',
  animatedClassName: 'aos-animate',
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 90,

  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom',
})

export const ContectArears = () => {
  const classes = useStyles()
  return (
    <Grid item container className="contect-area">
      <Grid item xs={12} sm={4} md={4}>
        <div className="inner-grid">
          <Typography
            variant="h6"
            style={{
              fontFamily: 'Roboto Slab',
              color: '#333333',
              marginTop: 140,
            }}
          >
            Content Areas
          </Typography>
          <Typography
            variant="caption"
            style={{
              marginTop: '1rem',
              fontWeight: 'bold',
              color: '#808080',
            }}
          >
            ONE CARD FOR EVERY PROBLEM
          </Typography>
          <Typography variant="body2" className="titlebody">
            We love cards and everybody on the web seems to. We have gone above
            and beyond with options for you to organise your information. From
            cards designed for blog posts, to product cards or user profiles,
            you will have many options to choose from. All the cards follow the
            material principles and have a design that stands out.
          </Typography>
        </div>
      </Grid>
      <Grid item xs={12} sm={8} md={8}>
        <div className="content-grid">
          <img
            alt="tablet"
            src="https://demos.creative-tim.com/material-kit-pro-react/static/media/presentation-ipad.65615a83.jpg"
            className="tablet-image"
          />
          <Card
            className={classes.card}
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <CardMedia
              image="https://demos.creative-tim.com/material-kit-pro-react/static/media/ipad-comments.bcdf9b4f.jpg"
              className="comments"
            />
          </Card>

          <Card
            className={classes.cardProduct}
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <CardMedia
              image="https://demos.creative-tim.com/material-kit-pro-react/static/media/ipad-table.bab28e74.jpg"
              className="comments"
            />
          </Card>
        </div>
      </Grid>
    </Grid>
  )
}
