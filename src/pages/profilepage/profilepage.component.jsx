import React from 'react'

import './profilepage.style.scss'
import { ProfileParallax } from '../../components/parallaxProfilepage/profileParallax.component'
import { ProfileFeature } from '../../components/profilefeatures/profileFeatures.component'

export const ProfilePage = () => {
  return (
    <div className="profilepage">
      <ProfileParallax />
      <ProfileFeature />
    </div>
  )
}
