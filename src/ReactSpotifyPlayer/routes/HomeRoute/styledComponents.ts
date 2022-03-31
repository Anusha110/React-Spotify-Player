import styled from 'styled-components'
import tw from 'twin.macro'
import { DESKTOP_MIN_WIDTH } from '../../../Common/constants/ResponsiveConstants'
import colors from '../../../Common/themes/Colors'

export const HomeContainer = styled.div`
   height: 100vh;
   max-height: 100vh;
   background-color: ${colors.blackNine};
   display: flex;
   flex-direction: row;
   overflow: hidden;

   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      display: flex;
      flex-direction: column;
   }
`

export const HomeContentContainer = styled.div`
   ${tw`flex flex-col`}
   padding: 40px;
   overflow-y: auto;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      padding: 15px;
   }
`

export const HomeSection = styled.div`
   margin-top: 40px;
`

export const HomeSectionHeader = styled.h1`
   font-size: 20px;
   font-style: normal;
   font-weight: 700;
   font-size: 24px;
   line-height: 32px;
   margin-left: 2%;
   margin-bottom: 20px;
`

export const SpotifyItemsContainer = styled.div`
   ${tw`flex flex-row items-start`}
   flex-wrap: wrap;
`
