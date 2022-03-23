import { Link } from 'react-router-dom'
import styled from 'styled-components'
import tw from 'twin.macro'
import { DESKTOP_MIN_WIDTH } from '../../../Common/constants/ResponsiveConstants'
import colors from '../../../Common/themes/Colors'

export const AudioPlayerContainer = styled.div`
   ${tw`flex flex-row items-center`}
   border-top: solid 1px ${colors.blackSix};
   max-height: 270px;
   padding: 20px;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      ${tw`justify-start`}
      height: 90px;
      padding: 20px;
   }
`

export const Audio = styled.audio``

export const PlaylistImageInPlayer = styled.img`
   height: 50px;
   border-radius: 5px;
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
