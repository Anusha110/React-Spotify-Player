import React from 'react'
import { LoadingContainer, SpotifyImage, LoadingText } from './styledComponents'

const LoadingView = () => (
   <LoadingContainer>
      <SpotifyImage
         src='https://assets.ccbp.in/frontend/react-js/spotify-remix-login-music.png'
         alt='website logo'
      />
      <LoadingText>Loading...</LoadingText>
   </LoadingContainer>
)

export default LoadingView
