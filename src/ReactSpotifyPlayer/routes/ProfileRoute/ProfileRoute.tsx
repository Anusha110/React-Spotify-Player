import { observer } from 'mobx-react'
import Cookies from 'js-cookie'
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'

import {
   MusicStoreContext,
   UserStoreContext
} from '../../../Common/stores/StoresContext'
import { ACCESS_TOKEN } from '../../../Common/utils/StorageUtils'

import NavBar from '../../components/NavBar/NavBar'
import LoadingView from '../../components/LoadingView/LoadingView'
import useUserInformation from '../../hooks/useUserInformation'
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
   const { getUserInformationApiStatus } = useContext(UserStoreContext)
   const { getUserPlaylists, userPlaylistsModel } = useContext(
      MusicStoreContext
   )
   const userInformationModel = useUserInformation()

   useEffect(() => {
      if (userPlaylistsModel === null && userInformationModel) {
         getUserPlaylists({ id: userInformationModel.id })
      }
   }, [])

   const logout = () => {
      Cookies.remove(ACCESS_TOKEN)
      history.replace('/login')
   }

   const renderUserInfoContainer = () => (
      <UserInfoContainer>
         <UserInfoSubSection>
            <UserInfoStat>{userInformationModel?.followers.total}</UserInfoStat>
            <UserInfoName>FOLLOWERS</UserInfoName>
         </UserInfoSubSection>
         <UserInfoSubSection>
            <UserInfoStat>{userPlaylistsModel?.total}</UserInfoStat>{' '}
            {/*/If checks here too?*/}
            <UserInfoName>PLAYLISTS</UserInfoName>
         </UserInfoSubSection>
      </UserInfoContainer>
   )

   const renderUserDetails = () => (
      <UserContainer>
         <PersonIcon size={150} />
         <UserName>User Name</UserName>
         {renderUserInfoContainer()}
         <LogoutButton onClick={logout}>Logout</LogoutButton>
      </UserContainer>
   )

   const renderSuccessView = () => (
      <ProfileContainer>
         <NavBar />
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
