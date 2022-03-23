import { observer } from 'mobx-react'
import Cookies from 'js-cookie'
import React, { useContext, useEffect } from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { useHistory, useLocation } from 'react-router-dom'
import { getTypeParameterOwner } from 'typescript'
import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import { UserStoreContext } from '../../../Common/stores/StoresContext'
import SideBar from '../../components/SideBar/SideBar'
import LoadingView from '../../components/LoadingView/LoadingView'
import {
   UserContainer,
   ProfileContainer,
   UserInfoContainer,
   UserInfoSubSection,
   UserInfoStat,
   UserInfoName,
   LogoutButton,
   UserName,
   PersonIcon
} from './styledComponents'

const ProfileRoute = observer(() => {
   const history = useHistory()
   const userStore = useContext(UserStoreContext)
   const {
      userInformationModel,
      getUserInformationApiStatus,
      getUserInformation
   } = userStore

   useEffect(() => {
      getUserInformation()
   }, [])

   const getTotalNumberOfFollowers = () => {
      const followerCount = userInformationModel?.followers.total
      const followerCountStr = followerCount?.toString()
      return followerCountStr
   }

   const logout = () => {
      Cookies.remove('pa_token')
      history.replace('/login')
   }
   const renderUserDetails = () => (
      <UserContainer>
         <PersonIcon size={150} />
         <UserName>User Name</UserName>
         <UserInfoContainer>
            <UserInfoSubSection>
               <UserInfoStat>
                  {userInformationModel?.followers.total}
               </UserInfoStat>
               <UserInfoName>FOLLOWERS</UserInfoName>
            </UserInfoSubSection>
            <UserInfoSubSection>
               <UserInfoStat>70</UserInfoStat>
               <UserInfoName>PLAYLISTS</UserInfoName>
            </UserInfoSubSection>
         </UserInfoContainer>
         <LogoutButton onClick={logout}>Logout</LogoutButton>
      </UserContainer>
   )

   const renderSuccessView = () => (
      <ProfileContainer>
         <SideBar />
         {renderUserDetails()}
      </ProfileContainer>
   )

   const renderProfileRoute = () => {
      switch (getUserInformationApiStatus) {
         case API_FETCHING:
            return <LoadingView />
         case API_SUCCESS:
            return renderSuccessView()
         default:
            null
      }
   }

   return <>{renderProfileRoute()}</>
})

export default ProfileRoute
