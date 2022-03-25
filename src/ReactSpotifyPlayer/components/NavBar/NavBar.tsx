import React, { useContext } from 'react'
import { Link, useHistory, useLocation, withRouter } from 'react-router-dom' //eslint-disable-line
import { useState } from 'react'
import { History } from 'history' //eslint-disable-line
import { observer } from 'mobx-react'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useTranslation } from 'react-i18next'
import {
   HOME_SCREEN_PATH,
   PROFILE_SCREEN_PATH,
   YOUR_MUSIC_PATH
} from '../../../Common/constants/NavigationConstants'
import { UserStoreContext } from '../../../Common/stores/StoresContext'
import {
   DesktopNavBarContainer,
   MobileNavBarContainer,
   SpotifyImage,
   NavBarIconsContainer,
   NavBarIcon,
   IconName,
   DesktopNavBarNavigation,
   MobileNavBarNavigation,
   HomeIcon,
   MusicIcon,
   PersonIcon,
   PlaylistIcon
} from './styledComponents'

const i18nNavBarPath = 'reactSpotifyPlayer:navBar.'
const i18nLogoAltTextPath = 'reactSpotifyPlayer:spotifyLogoAltText.'

const NavBar = observer(() => {
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
      //FIXME: How can I make this more clean?
      <>
         <NavBarIcon to={PROFILE_SCREEN_PATH} clicked={isProfileScreen}>
            <PersonIcon size={28} clicked={isProfileScreen} />
            <IconName clicked={isProfileScreen}>
               {t(`${i18nNavBarPath}profileIconText`)}
            </IconName>
         </NavBarIcon>
         <NavBarIcon to={HOME_SCREEN_PATH} clicked={isHomeScreen}>
            <HomeIcon
               size={28}
               clicked={isHomeScreen}
               // style={{ fill: 'blue', size: 90 }}
            />
            {/* <IconController renderIcon={() => <AiFillHome />}></IconController> */}
            <IconName clicked={isHomeScreen}>
               {t(`${i18nNavBarPath}homeIconText`)}
            </IconName>
         </NavBarIcon>

         <NavBarIcon to={YOUR_MUSIC_PATH} clicked={isYourMusicScreen}>
            <MusicIcon size={28} clicked={isYourMusicScreen} />
            <IconName clicked={isYourMusicScreen}>
               {t(`${i18nNavBarPath}musicIconText`)}
            </IconName>
         </NavBarIcon>

         <NavBarIcon
            to={`/users/${userInformationModel?.id}/playlists/`}
            clicked={isPlaylistsScreen}
         >
            <PlaylistIcon size={28} clicked={isPlaylistsScreen} />
            <IconName clicked={isPlaylistsScreen}>
               {t(`${i18nNavBarPath}playlistIconText`)}
            </IconName>
         </NavBarIcon>
      </>
   )

   const showNavBarIcons = () => (
      <>
         <MobileNavBarNavigation>
            <NavBarIconsContainer>
               {renderIcons()}
               <AiOutlineClose size={28} onClick={toggleShowIcons} />
            </NavBarIconsContainer>
         </MobileNavBarNavigation>
      </>
   )

   const hideNavBarIcons = () => (
      <>
         <Link to={HOME_SCREEN_PATH}>
            <SpotifyImage
               src='https://assets.ccbp.in/frontend/react-js/spotify-remix-login-music.png'
               alt={t(`${i18nLogoAltTextPath}`)}
            />
         </Link>
         <HiOutlineMenu size={28} onClick={toggleShowIcons} />
      </>
   )

   const renderMobileView = () => (
      <MobileNavBarContainer>
         {showIcons ? showNavBarIcons() : hideNavBarIcons()}
      </MobileNavBarContainer>
   )

   const renderDesktopView = () => (
      <DesktopNavBarContainer>
         <Link to={HOME_SCREEN_PATH}>
            <SpotifyImage
               src='https://assets.ccbp.in/frontend/react-js/spotify-remix-login-music.png'
               alt={t(`${i18nLogoAltTextPath}`)}
            />
         </Link>
         <DesktopNavBarNavigation>
            <NavBarIconsContainer>{renderIcons()}</NavBarIconsContainer>
         </DesktopNavBarNavigation>
      </DesktopNavBarContainer>
   )

   return (
      <>
         {renderMobileView()}
         {renderDesktopView()}
      </>
   )
})

export default withRouter(NavBar)

// <IconController renderIcon={(args)=><PhoneIcon {...args}/>}/>
// <IconController renderIcon={(props)=><XiCOn {...props}/>}/>

// <IconController renderIcon={(props)=><YIcon {...props}/>}/>

// <IconController renderIcon={(props)=><PhoneIcon {...props}/>}/>

//    <IconController>
//       <PhoneIcon/>
//    </IconController>

// return
// <div>
//    {renderIcon({color; blue, })}
// </div>
