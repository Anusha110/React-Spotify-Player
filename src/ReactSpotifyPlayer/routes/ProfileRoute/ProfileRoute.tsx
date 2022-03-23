import { observer } from 'mobx-react'
import Cookies from 'js-cookie'
import React, { useContext, useEffect } from 'react'
import { BsPersonFill } from 'react-icons/bs'
import { useHistory } from 'react-router-dom'
import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import {
   MusicStoreContext,
   UserStoreContext
} from '../../../Common/stores/StoresContext'
import SideBar from '../../components/NavBar/NavBar'
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
   const musicStore = useContext(MusicStoreContext)
   const { getUserPlaylists, userPlaylistsModel } = musicStore
   const {
      userInformationModel,
      getUserInformationApiStatus,
      getUserInformation
   } = userStore

   useEffect(() => {
      getUserInformation()

      if (userPlaylistsModel === null) {
         if (userInformationModel) {
            getUserPlaylists({ id: userInformationModel?.id })
         }
      }
   }, [])

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
               <UserInfoStat>{userPlaylistsModel?.total}</UserInfoStat>{' '}
               {/*/If checks here too?*/}
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
