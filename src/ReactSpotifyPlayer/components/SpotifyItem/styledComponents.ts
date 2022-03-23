import styled from 'styled-components'
import tw from 'twin.macro'
import {
   DESKTOP_MIN_WIDTH,
   TABLET_MIN_WIDTH
} from '../../../Common/constants/ResponsiveConstants'
import colors from '../../../Common/themes/Colors'

export const SpotifyItemContainer = styled.div`
   ${tw`flex flex-col items-center`}
   font-family: Arial;
   margin: 10px;
   width: 225px;
   cursor: pointer;
   @media screen and (max-width: ${TABLET_MIN_WIDTH - 1}px) {
      width: 180px;
   }
   @media screen and (max-width: 650px) {
      width: 120px;
   }
   @media screen and (max-width: 450px) {
      width: 80px;
   }
`

export const ItemName = styled.p`
   font-style: normal;
   font-weight: 600;
   font-size: 16px;
   text-wrap: wrap;
   line-height: 21px;
   margin-top: 15px;
   /* identical to box height */

   text-align: center;
`

export const ItemImage = styled.img`
   height: 166px;
   width: 166px;
   border-radius: 8px;
   @media screen and (max-width: ${TABLET_MIN_WIDTH - 1}px) {
      height: 100px;
      width: 100px;
   }
   @media screen and (max-width: 450px) {
      height: 80px;
      width: 80px;
   }
`
