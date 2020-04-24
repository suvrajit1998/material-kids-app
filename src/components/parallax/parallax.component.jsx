import React from 'react'

import { Typography } from '@material-ui/core'

import './parallax.style.scss'

export const Parallax = () => {
  return (
    <div className="parallax">
      <Typography
        variant="h2"
        style={{ color: '#fff', fontWeight: 'bold', textAlign: 'center' }}
      >
        Material Kit Parallax
      </Typography>
    </div>
  )
}
