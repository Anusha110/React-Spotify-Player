import { BsFillPersonFill } from 'react-icons/bs'
import { AiFillHome } from 'react-icons/ai'
import { MdQueueMusic } from 'react-icons/md'
import { HiMusicNote } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../../Common/themes/Colors'
import {
   DESKTOP_MIN_WIDTH,
   LG_DESKTOP_MIN_WIDTH
} from '../../../Common/constants/ResponsiveConstants'

export const DesktopNavBarContainer = styled.div`
   width: 100px;
   height: 100vh;
   background-color: ${colors.black90};
   padding-top: 15px;
   display: flex;
   flex-direction: column;
   align-items: center;
   flex-shrink: 0;
   // @media screen and (max-width: 1600px) {
   //    width: 200px;
   // }
   // max-width: 115px;
   // @media screen and (max-width: ${LG_DESKTOP_MIN_WIDTH - 1}px) {
   //    width: 180px;
   // }
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      display: none;
   }
`
export const MobileNavBarContainer = styled.div`
   min-height: 75px;
   background-color: ${colors.black90};
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-between;
   padding-left: 15px;
   padding-right: 15px;
   width: 100%;
   @media screen and (min-width: ${DESKTOP_MIN_WIDTH}px) {
      display: none;
   }
`

export const DesktopNavBarNavigation = styled(DesktopNavBarContainer)`
   justify-content: center;
   flex-grow: 1;
   width: 100%;
`

export const MobileNavBarNavigation = styled(MobileNavBarContainer)`
   justify-content: center;
   flex-grow: 1;
   width: 100%;
`

export const SpotifyImage = styled.img`
   height: 30px;
   @media screen and (min-width: ${DESKTOP_MIN_WIDTH}px) {
      margin-top: 15px;
   }
`

export const NavBarIconsContainer = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 100%;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      flex-direction: row;
      justify-content: space-between;
   }
`

export const NavBarIcon = styled(Link)<{ clicked: boolean }>`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 10px;
   cursor: pointer;
   @media screen and (min-width: ${DESKTOP_MIN_WIDTH}px) {
      width: 100%;
      background-color: ${props =>
         props.clicked ? colors.blackEight : colors.black90};
      border-left: ${props =>
         props.clicked ? `6px solid ${colors.green400}` : 'none'};
   }
`

export const PersonIcon = styled(BsFillPersonFill)<{ clicked: boolean }>`
   fill: ${props => (props.clicked ? colors.white : colors.black45)};
`

export const HomeIcon = styled(AiFillHome)<{ clicked: boolean }>`
   fill: ${props => (props.clicked ? colors.white : colors.black45)};
`

export const MusicIcon = styled(MdQueueMusic)<{ clicked: boolean }>`
   fill: ${props => (props.clicked ? colors.white : colors.black45)};
`

export const PlaylistIcon = styled(HiMusicNote)<{ clicked: boolean }>`
   fill: ${props => (props.clicked ? colors.white : colors.black45)};
`

export const IconName = styled.p`
   text-align: center;
   font-style: normal;
   font-weight: 700;
   font-size: 12px;
   line-height: 16px;
   margin-top: 5px;
   color: ${props => (props.clicked ? colors.white : colors.black45)};
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      display: none;
   }
`
