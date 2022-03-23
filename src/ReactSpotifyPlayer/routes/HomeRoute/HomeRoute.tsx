import React, { useContext, useEffect } from 'react'
import Cookies from 'js-cookie'
import { observer } from 'mobx-react'
import { useHistory, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import SideBar from '../../components/SideBar/SideBar'
import {
   MusicStoreContext,
   UserStoreContext
} from '../../../Common/stores/StoresContext'
import SpotifyItem from '../../components/SpotifyItem/SpotifyItem'
import LoadingView from '../../components/LoadingView/LoadingView'
import {
   HomeContainer,
   HomeContentContainer,
   HomeSection,
   HomeSectionHeader,
   SpotifyItemsContainer
} from './styledComponents'

const HomeRoute = observer(() => {
   const history = useHistory()
   const location = useLocation()
   const { getUserInformation, userInformationModel } = useContext(
      UserStoreContext
   )
   const { t } = useTranslation()
   const {
      getBrowseCategories,
      getBrowseCategoriesApiStatus,
      browseCategoriesModel,
      getFeaturedPlaylists,
      getFeaturedPlaylistsApiStatus,
      featuredPlaylistsModel,
      getNewReleases,
      getNewReleasesApiStatus,
      newReleasesModel
   } = useContext(MusicStoreContext)

   useEffect(() => {
      getUserInformation()
      getBrowseCategories()
   }, [])

   useEffect(() => {
      if (userInformationModel) {
         getFeaturedPlaylists({
            country: userInformationModel.country,
            timestamp: userInformationModel?.country
         })

         getNewReleases({
            country: userInformationModel.country
         })
      }
   }, [userInformationModel?.country])

   const getFeaturedPlaylistsView = () => {
      if (featuredPlaylistsModel) {
         const playlistItems = featuredPlaylistsModel.playlists.items
         return playlistItems.map(eachPlaylist => (
            <SpotifyItem
               key={eachPlaylist.id}
               itemDetails={eachPlaylist}
               redirectPath={`/users/spotify/playlists/${eachPlaylist.id}/`}
            />
         ))
      }
      return null
   }

   const getBrowseCategoriesView = () => {
      if (browseCategoriesModel) {
         const categories = browseCategoriesModel.categories.items
         return categories.map(eachCategory => (
            <SpotifyItem
               key={eachCategory.id}
               itemDetails={eachCategory}
               redirectPath={`/browse/categories/${eachCategory.id}/playlists?country=${userInformationModel?.country}/`}
            />
         ))
      }
      return null
   }

   const getNewReleasesView = () => {
      if (newReleasesModel) {
         const albums = newReleasesModel.albums.items
         return albums.map(eachAlbum => (
            <SpotifyItem
               key={eachAlbum.id}
               itemDetails={eachAlbum}
               redirectPath={`/albums/${eachAlbum.id}/`}
            />
         ))
      }
      return null
   }

   const renderHomeSection = (title: string, renderItems) => (
      <HomeSection>
         <HomeSectionHeader>{title}</HomeSectionHeader>
         <SpotifyItemsContainer>{renderItems()}</SpotifyItemsContainer>
      </HomeSection>
   )

   const renderSuccessView = () => (
      <HomeContainer>
         <SideBar />
         <HomeContentContainer>
            {renderHomeSection(
               t('reactSpotifyPlayer:home.featuresPlaylistsSection'),
               getFeaturedPlaylistsView
            )}
            {renderHomeSection(
               t('reactSpotifyPlayer:home.browseCategoriesSection'),
               getBrowseCategoriesView
            )}
            {renderHomeSection(
               t('reactSpotifyPlayer:home.newReleasesSection'),
               getNewReleasesView
            )}
         </HomeContentContainer>
      </HomeContainer>
   )

   const renderHomePage = () => {
      const apiStatusArray = [
         getBrowseCategoriesApiStatus,
         getFeaturedPlaylistsApiStatus,
         getNewReleasesApiStatus
      ]

      switch (true) {
         case apiStatusArray.includes(API_FETCHING):
            return <LoadingView />
         case apiStatusArray.every(status => status === API_SUCCESS):
            return renderSuccessView()
         default:
            null
      }
   }

   return <>{renderHomePage()}</>
})

export default HomeRoute

// <IconController renderIcon={(args)=><PhoneIcon {...props}/>}/>
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
