import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import {
   DESKTOP_MIN_WIDTH,
   SM_MIN_WIDTH,
   TABLET_MIN_WIDTH
} from '../../../Common/constants/ResponsiveConstants'
import colors from '../../../Common/themes/Colors'

export const PlaylistsContainer = styled.div`
   height: 100vh;
   max-height: 100vh;
   background-color: ${colors.blackNine};
   display: flex;
   flex-direction: row;
   width: 100%;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      flex-direction: column;
   }
`

export const PlaylistsContentContainer = styled.div`
   overflow-y: auto;
   padding-top: 30px;
   padding-left: 40px;
`

export const Title = styled.p`
   font-size: 30px;
   font-weight: bold;
   margin-left: 15px;
   @media screen and (max-width: ${TABLET_MIN_WIDTH - 1}px) {
      margin-left: 0px;
   }
   @media screen and (max-width: ${SM_MIN_WIDTH - 1}px) {
      font-size: 25px;
   }
`

export const PlaylistItems = styled.div`
   ${tw`flex flex-row`}
   flex-wrap: wrap;
   @media screen and (max-width: ${TABLET_MIN_WIDTH - 1}px) {
      ${tw`flex flex-col`};
   }
`

export const PlaylistItem = styled.div`
   ${tw`flex flex-col items-center`}
   margin: 20px;
   margin-left: 0px;
   width: 250px;
   cursor: pointer;
   // flex-wrap: wrap;
   @media screen and (max-width: ${TABLET_MIN_WIDTH - 1}px) {
      ${tw`flex flex-row`};
      width: auto;
   }
`
export const PlaylistText = styled.div`
   ${tw`flex flex-col items-center`}
   @media screen and (max-width: ${TABLET_MIN_WIDTH - 1}px) {
      margin-left: 30px;
      ${tw`flex flex-col items-start`}
      flex-grow: 1;
   }
`

export const PlaylistImage = styled.img`
   height: 200px;
   border-radius: 10px;
   @media screen and (max-width: ${SM_MIN_WIDTH - 1}px) {
      height: 100px;
      width: 100px;
   }
`

export const PlaylistName = styled.p`
   font-size: 20px;
   font-weight: 600;
   margin-top: 10px;
   text-align: center;
   flex-grow: 1;
   text-wrap: wrap;
   @media screen and (max-width: ${TABLET_MIN_WIDTH - 1}px) {
      text-align: left;
   }
`

export const TotalTracks = styled.p`
   color: ${colors.black45};
`
