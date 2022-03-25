import { BsFillPersonFill } from 'react-icons/bs'
import styled from 'styled-components'
import tw from 'twin.macro'
import { DESKTOP_MIN_WIDTH } from '../../../Common/constants/ResponsiveConstants'
import colors from '../../../Common/themes/Colors'

export const ProfileContainer = styled.div`
   min-height: 100vh;
   background-color: ${colors.blackNine};
   ${tw`flex flex-row items-center`}
   flex-grow: 1;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      ${tw`flex flex-col`}
   }
`

export const UserName = styled.p`
   font-size: 45px;
   font-weight: bold;
`

export const UserContainer = styled.div`
   ${tw`flex flex-col items-center`}
   width: 100%;
   @media screen and (max-width: ${DESKTOP_MIN_WIDTH - 1}px) {
      flex-grow: 1;
      justify-content: center;
   }
`
export const UserInfoContainer = styled.div`
   ${tw`flex flex-row`}
`

export const UserInfoSubSection = styled.div`
   ${tw`flex flex-col items-center`}
   margin: 20px;
`

export const UserInfoStat = styled.p`
   color: ${colors.green500};
   font-weight: bold;
`

export const UserInfoName = styled.p`
   color: ${colors.black45};
`

export const LogoutButton = styled.button`
   border: 1px solid white;
   padding: 5px;
   padding-left: 15px;
   padding-right: 15px;
   border-radius: 14px;
`

export const PersonIcon = styled(BsFillPersonFill)`
   padding: 20px;
   border: 1px solid white;
   border-radius: 80px;
   margin-bottom: 20px;
`
