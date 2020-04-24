import React from 'react'

import './homepage.style.scss'
import { Parallax } from '../../components/parallax/parallax.component'
import { Features } from '../../components/features/features.component'

export const HomePage = () => {
  return (
    <div className="homepage">
      <Parallax />
      <Features />
    </div>
  )
}
