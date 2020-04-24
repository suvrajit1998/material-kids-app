import React from 'react'

import './connectPage.style.scss'
import { ConnectParallax } from '../../components/connectParallax/connectParallax.component'
import { FeaturesBox } from './components/featuresBox/featuresBox.component'

export const ConnectPage = () => {
  return (
    <div>
      <ConnectParallax />
      <FeaturesBox />
    </div>
  )
}
