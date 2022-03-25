import styled from 'styled-components'
import tw from 'twin.macro'
import {
   DESKTOP_MIN_WIDTH,
   SM_MIN_WIDTH
} from '../../../Common/constants/ResponsiveConstants'
import colors from '../../../Common/themes/Colors'

export const DesktopPlaylistDetailsContainer = styled.div`
   height: 100vh;
   max-height: 100vh;
   background-color: ${colors.blackNine};
   display: flex;
   flex-direction: row;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      display: none;
   }
`

export const MobilePlaylistDetailsContainer = styled.div`
   height: 100vh;
   max-height: 100vh;
   background-color: ${colors.blackNine};
   display: flex;
   flex-direction: column;
   @media screen and (min-width: ${DESKTOP_MIN_WIDTH}px) {
      display: none;
   }
`

export const PlaylistContentContainer = styled.div`
   ${tw`flex flex-col`}
   flex-grow: 1;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      max-height: 100vh;
   }
`
export const TracksContainer = styled.div`
   padding: 40px;
   overflow-y: auto;
   scrollbar-padding: none;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      // min-height: 80vh;

      padding: 5px;
   }
`
export const MusicPlayer = styled.div`
   ${tw`flex flex-row items-center`}
   border-top: solid 1px ${colors.blackSix};
   height: 270px;
   padding: 20px;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      ${tw`justify-start`}
      height: 90px;
      padding: 20px;
   }
`

export const Audio = styled.audio`
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
   }
`

export const TrackText = styled.div`
   ${tw`flex flex-col justify-start items-start`}
   margin-left: 10px;
   margin-right: 150px;

   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      margin-right: 0px;
      flex-grow: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
   }
`

export const TrackName = styled.p``

export const TrackArtists = styled.p`
   font-size: 13px;
`

export const PlaylistHeader = styled.div`
   ${tw`flex flex-row`}
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      ${tw`flex flex-col items-center`}
   }
`

export const PlaylistText = styled.div`
   ${tw`flex flex-col justify-end items-start`}
   margin-left: 15px;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      ${tw`items-center`}
   }
`

export const PlaylistImage = styled.img`
   height: 350px;
   border-radius: 10px;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      height: 200px;
      width: 200px;
   }
`

export const PlaylistImageInPlayer = styled.img`
   height: 50px;
   border-radius: 5px;
`

export const PlaylistType = styled.p`
   font-weight: 600;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      display: none;
   }
`

export const PlaylistName = styled.h1`
   font-size: 65px;
   font-weight: 600;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      font-size: 38px;
      font-weight: normal;
      margin-top: 15px;
   }
   @media screen and (max-width: ${SM_MIN_WIDTH - 1}px) {
      font-size: 35px;
      font-weight: normal;
      margin-top: 15px;
   }
`

export const PlaylistOwner = styled.p`
   font-weight: 600;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      color: ${colors.black45};
      font-weight: normal;
      font-size: 20px;
   }
`

export const MobileTrackContainer = styled.div`
   margin-top: 50px;
`

export const MobileTrackRow = styled.div`
   ${tw`flex flex-row justify-between items-center`}
   cursor: pointer;
   margin-bottom: 30px;
   padding-left: 20px;
   padding-right: 20px;
`

export const MobileTrackText = styled.div`
   ${tw`flex flex-col justify-center items-start`}
   font-family: Arial;
   max-width: 65%;
`

export const MobileTrackName = styled.p`
   font-size: 18px;
   margin-bottom: 5px;
   font-weight: 600;
   @media screen and (max-width: ${SM_MIN_WIDTH - 1}px) {
      font-size: 15px;
   }
`

export const MobileTrackArtist = styled.p`
   color: ${colors.black45};
`

export const MobileTrackDuration = styled.p`
   color: ${colors.black45};
`
