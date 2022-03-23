import React, { useContext } from 'react'
import {
   Link,
   match,
   useHistory,
   useLocation,
   withRouter
} from 'react-router-dom' //eslint-disable-line
import { useState } from 'react'
import { History } from 'history' //eslint-disable-line
import { observer } from 'mobx-react'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import {
   HOME_SCREEN_PATH,
   PLAYLIST_DETAILS_PATH,
   PROFILE_SCREEN_PATH,
   USER_PLAYLISTS_PATH,
   YOUR_MUSIC_PATH
} from '../../../Common/constants/NavigationConstants'
import colors from '../../../Common/themes/Colors'
import { UserStoreContext } from '../../../Common/stores/StoresContext'
import {
   DesktopSideBarContainer,
   MobileSideBarContainer,
   SpotifyImage,
   SideBarIconsContainer,
   SideBarIcon,
   IconName,
   DesktopSideBarNavigation,
   MobileSideBarNavigation,
   HomeIcon,
   MusicIcon,
   PersonIcon,
   PlaylistIcon
} from './styledComponents'

const SideBar = observer(() => {
   const { pathname } = useLocation()
   const { t } = useTranslation()
   const { userInformationModel } = useContext(UserStoreContext)

   const isProfileScreen = pathname === PROFILE_SCREEN_PATH
   const isHomeScreen =
      pathname === HOME_SCREEN_PATH ||
      pathname.includes('/users/spotify/playlists/') ||
      pathname.includes('browse/categories')
   const isYourMusicScreen = pathname === YOUR_MUSIC_PATH
   const isPlaylistsScreen = pathname.includes('users/')
   const [showIcons, setShowIcons] = useState(!isHomeScreen)

   const toggleShowIcons = () => {
      setShowIcons(prevState => !prevState)
   }

   const renderIcons = () => (
      <>
         <SideBarIcon to={PROFILE_SCREEN_PATH} clicked={isProfileScreen}>
            <PersonIcon size={28} clicked={isProfileScreen} />
            <IconName clicked={isProfileScreen}>
               {t('reactSpotifyPlayer:sideBar.profileIconText')}
            </IconName>
         </SideBarIcon>
         <SideBarIcon to={HOME_SCREEN_PATH} clicked={isHomeScreen}>
            <HomeIcon size={28} clicked={isHomeScreen} />
            <IconName clicked={isHomeScreen}>
               {t('reactSpotifyPlayer:sideBar.homeIconText')}
            </IconName>
         </SideBarIcon>

         <SideBarIcon to={YOUR_MUSIC_PATH} clicked={isYourMusicScreen}>
            <MusicIcon size={28} clicked={isYourMusicScreen} />
            <IconName clicked={isYourMusicScreen}>
               {t('reactSpotifyPlayer:sideBar.musicIconText')}
            </IconName>
         </SideBarIcon>

         <SideBarIcon
            to={`/users/${userInformationModel?.id}/playlists/`}
            clicked={isPlaylistsScreen}
         >
            <PlaylistIcon size={28} clicked={isPlaylistsScreen} />
            <IconName clicked={isPlaylistsScreen}>
               {t('reactSpotifyPlayer:sideBar.playlistIconText')}
            </IconName>
         </SideBarIcon>
      </>
   )

   const renderDesktopView = () => (
      <DesktopSideBarContainer>
         <Link to={HOME_SCREEN_PATH}>
            <SpotifyImage
               src='https://assets.ccbp.in/frontend/react-js/spotify-remix-login-music.png'
               alt='website logo'
            />
         </Link>
         <DesktopSideBarNavigation>
            <SideBarIconsContainer>{renderIcons()}</SideBarIconsContainer>
         </DesktopSideBarNavigation>
      </DesktopSideBarContainer>
   )

   const showNavBarIcons = () => (
      <>
         <MobileSideBarNavigation>
            <SideBarIconsContainer>
               {renderIcons()}
               <AiOutlineClose size={28} onClick={toggleShowIcons} />
            </SideBarIconsContainer>
         </MobileSideBarNavigation>
      </>
   )

   const hideNavBarIcons = () => (
      <>
         <Link to={HOME_SCREEN_PATH}>
            <SpotifyImage
               src='https://assets.ccbp.in/frontend/react-js/spotify-remix-login-music.png'
               alt='website logo'
            />
         </Link>
         <HiOutlineMenu size={28} onClick={toggleShowIcons} />
      </>
   )

   const renderMobileView = () => (
      <MobileSideBarContainer>
         {showIcons ? showNavBarIcons() : hideNavBarIcons()}
      </MobileSideBarContainer>
   )

   return (
      <>
         {renderMobileView()}
         {renderDesktopView()}
      </>
   )
})

export default withRouter(SideBar)
