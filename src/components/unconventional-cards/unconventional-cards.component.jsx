import React from 'react'

import { Grid, Typography } from '@material-ui/core'

import './unconventional-cards.style.scss'

export const UnconventionalCards = () => {
  return (
    <div className="uncon-cards">
      <Grid item container style={{ width: '100%', height: '100%' }}>
        <Grid item xs={12} sm={7} md={7} className="cards-grid">
          <div className="inner-grid">
            <img
              src="https://demos.creative-tim.com/material-kit-pro-react/static/media/cards-test.c1ff9b42.png"
              alt="uncon-cards"
              className="cards-image"
            />
          </div>
        </Grid>
        <Grid item xs={12} sm={5} md={5}>
          <div className="card-details">
            <Typography
              variant="h6"
              style={{
                fontFamily: 'Roboto Slab',
                color: '#fff',
                marginTop: 140,
              }}
            >
              Unconventional Cards
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
              We love cards and everybody on the web seems to. We have gone
              above and beyond with options for you to organise your
              information. From cards designed for blog posts, to product cards
              or user profiles, you will have many options to choose from. All
              the cards follow the material principles and have a design that
              stands out.
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}
