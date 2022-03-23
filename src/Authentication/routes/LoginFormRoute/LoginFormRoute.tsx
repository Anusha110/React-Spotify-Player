import React, { Component } from 'react'
import Cookies from 'js-cookie'
import './index.css'
import { useTranslation, WithTranslation, withTranslation } from 'react-i18next' //eslint-disable-line
import { useEffect } from 'react'

interface LoginRouteRoutePropsType extends WithTranslation {
   location: Location
}

import {
   FormContainer,
   LoginButton,
   LoginFormContainer,
   LoginWebsiteLogoDesktopImage,
   SpotifyRemixHeader
} from './styledComponents'

// import './index.css'

interface LoginRouteRoutePropsType extends WithTranslation {
   location: Location
}

class LoginForm extends Component<LoginRouteRoutePropsType> {
   componentDidMount() {
      // NOTE: We wrote this code here because we kept redirect URL as login route, if you give a different route, make sure to move this code to the respective route or App.js

      const hashKey = this.getHashKeyFromLocationAfterLogin()

      if (hashKey.access_token) {
         this.postHashKeyAsMessage(hashKey)
      }

      this.getMessageAndsetAccessTokenInCookies()
   }

   getHashKeyFromLocationAfterLogin = () => {
      const { location } = this.props
      const { hash } = location
      const hashKey: { access_token?: string } = {}
      const queryParams = new URLSearchParams(window.location.search)
      const error = queryParams.get('error')

      if (error === 'access_denied') {
         window.close()
      }

      hash
         .replace(/^#\/?/, '')
         .split('&')
         .forEach(keyValue => {
            const spl = keyValue.indexOf('=')
            if (spl !== -1) {
               hashKey[keyValue.substring(0, spl)] = keyValue.substring(spl + 1)
            }
         })
      return hashKey
   }

   postHashKeyAsMessage = hashKey => {
      if (window) {
         window.opener?.postMessage(
            JSON.stringify({
               type: 'access_token',
               access_token: hashKey.access_token,
               expires_in: hashKey.expires_in || 0
            }),
            '*'
         )
         window.close()
      }
   }

   getMessageAndsetAccessTokenInCookies = () => {
      window.addEventListener(
         'message',
         event => {
            const hash = JSON.parse(event.data)
            if (hash.type === 'access_token') {
               const oneHour = new Date(new Date().getTime() + 60 * 60 * 1000)
               Cookies.set('pa_token', hash.access_token, {
                  expires: oneHour
               })
               window.location.replace('/')
            }
         },
         false
      )
   }

   isDevelopmentEnvironment = () => {
      if (
         process.env.NODE_ENV === 'development' ||
         window.location.hostname === 'localhost'
      ) {
         return true
      }
      return false
   }

   getRedirectURL = () => {
      if (this.isDevelopmentEnvironment()) {
         /* ADD THIS URL to your Application Redirect URIs to redirect after authentication success OR failure */
         return 'http://localhost:3004/login'
      }
      /* Change this redirectURL accordingly before publishing your project and ADD THIS URL to your Application Redirect URIs to redirect after authentication success OR failure */
      return 'https://sample.ccbp.tech/login'
   }

   openLoginModal = () => {
      // YOU NEED TO ADD YOUR CLIENT ID HERE
      const clientId = 'a17af0d56f794518a97c95520cd05805'

      const redirectUrl = this.getRedirectURL()

      const url = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&redirect_uri=${redirectUrl}&scope=user-read-private%20user-read-email%20playlist-read-private%20playlist-modify-public%20playlist-modify-private%20user-library-read%20user-library-modify%20user-follow-read%20user-follow-modify&state=34fFs29kd09&show_dialog=true`

      console.log(url, 'URL')

      const width = 450
      const height = 730
      const left = window.innerWidth / 2 - width / 2
      const top = window.innerHeight / 2 - height / 2

      window.open(
         url,
         'Spotify',
         `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${width}, height = ${height}, top = ${top}, left = ${left}`
      )
   }

   submitForm = async event => {
      event.preventDefault()
      this.openLoginModal()
   }

   render() {
      const { t } = this.props
      return (
         <LoginFormContainer>
            <FormContainer onSubmit={this.submitForm}>
               <LoginWebsiteLogoDesktopImage
                  src='https://assets.ccbp.in/frontend/react-js/spotify-remix-login-music.png'
                  className='login-website-logo-desktop-image'
                  alt='website logo'
               />
               <SpotifyRemixHeader>
                  {t('authentication:login.loginHeading')}
               </SpotifyRemixHeader>
               <LoginButton type='submit' className='login-button'>
                  {t('authentication:login.loginButton')}
               </LoginButton>
            </FormContainer>
         </LoginFormContainer>
      )
   }
}

export default withTranslation()(LoginForm)

// withTranslation()
