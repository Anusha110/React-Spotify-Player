import styled from 'styled-components'
import colors from '../../../Common/themes/Colors'

export const LoginFormContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-image: url('https://assets.ccbp.in/frontend/react-js/spotify-remix-login-bg.png');
   background-position: center;
   background-size: cover;
   height: 100vh;
   width: 100%;
   margin: auto;
   @media screen and (min-width: 992px) {
      flex-direction: row;
      justify-content: space-around;
   }
`
export const LoginWebsiteLogoDesktopImage = styled.img`
   width: 125px;
`

export const FormContainer = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   background-color: #181818;
   border-radius: 8px;
   width: 450px;
   flex-shrink: 1;
   padding: 110px 75px 110px 75px;
   background: #181818;
   opacity: 0.9;
   border-radius: 12px;
   box-shadow: 0px 8px 40px rgba(7, 7, 7, 0.08);

   @media screen and (max-width: 575px) {
      width: 75%;
      padding: 45px;
   }

   @media screen and (max-width: 767px) {
      width: 60 %;
   }
`

export const LoginButton = styled.button`
   // font-family: 'Assistant';
   font-weight: bold;
   font-size: 17px;
   color: ${colors.white};
   height: 40px;
   margin-top: 20px;
   margin-bottom: 2px;
   background-color: ${colors.green500};
   border: none;
   outline: none;
   cursor: pointer;
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 12px 32px;
   padding-bottom: 35px;
   border-radius: 24px;
   @media screen and (max-width: 575px) {
      font-size: 11px;
      padding-left: 15px;
      padding-right: 15px;
      // padding-top: 2px;
      padding-bottom: 2px;
   }
`

export const SpotifyRemixHeader = styled.h1`
   font-style: normal;
   font-weight: 700;
   font-size: 35px;
   margin: 10px;
   line-height: 52px;
   text-align: center;
   // font-family: 'Assistant';
   color: ${colors.white};
   @media screen and (max-width: 575px) {
      font-size: 20px;
   }
`
