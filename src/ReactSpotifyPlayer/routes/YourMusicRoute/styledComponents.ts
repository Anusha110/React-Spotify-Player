import styled from 'styled-components'
import tw from 'twin.macro'
import { DESKTOP_MIN_WIDTH } from '../../../Common/constants/ResponsiveConstants'
import colors from '../../../Common/themes/Colors'

export const YourMusicContainer = styled.div`
   height: 100vh;
   max-height: 100vh;
   background-color: ${colors.blackNine};
   display: flex;
   flex-direction: row;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      display: flex;
      flex-direction: column;
   }
`
export const YourMusicContentContainer = styled.div`
   padding: 40px;
   width: 100%;
   overflow-y: auto;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      padding: 10px;
   }
`

export const YourMusicHeader = styled.p`
   font-weight: 800;
   font-size: 25px;
   margin-bottom: 40px;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      font-size: 20px;
      margin-top: 40px;
      margin-bottom: 20px;
   }
`

export const ContentAndMusicPlayerContainer = styled.div`
   ${tw`flex flex-col`}
   width: 100%;
   overflow-y: auto;
`
export const LikedSongsContainer = styled.div`
   width: 100%;
`

export const LikedSongContainer = styled.div`
   ${tw`flex flex-row`}
   margin-bottom: 20px;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      max-width: 75%;
   }
`

export const LikedSongImage = styled.img`
   height: 100px;
   bored-radius: 5px;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      height: 70px;
   }
`

export const LikedSongText = styled.div`
   ${tw`flex flex-col justify-center`}
   margin-left: 15px;

   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      overflow: hidden;
   }
`

export const LikedSongName = styled.p`
   font-weight: bold;
   font-size: 20px;

   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      font-size: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
   }
`

export const LikedSongArtistAlbumText = styled.p`
   color: ${colors.black45};
   font-size: 15px;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
   }
`
export const LikedSongDuration = styled.p`
   color: ${colors.black45};
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      padding-right: 20px;
   }
`

export const LikedSongRow = styled.div<{ isPlaying: boolean }>`
   ${tw`flex flex-row justify-between items-center`}
   cursor: pointer;
`
