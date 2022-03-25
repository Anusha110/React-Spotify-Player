import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react'
import { useTranslation } from 'react-i18next'

import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import { MusicStoreContext } from '../../../Common/stores/StoresContext'

import SpotifyItem from '../../components/SpotifyItem/SpotifyItem'
import LoadingView from '../../components/LoadingView/LoadingView'
import NavBar from '../../components/NavBar/NavBar'
import useUserInformation from '../../hooks/useUserInformation'
import {
   HomeContainer,
   HomeContentContainer,
   HomeSection,
   HomeSectionHeader,
   SpotifyItemsContainer
} from './styledComponents'

const i18nHomePath = 'reactSpotifyPlayer:home.'

const HomeRoute = observer(() => {
   const userInformationModel = useUserInformation()
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
      getBrowseCategories()
   }, [])

   useEffect(() => {
      if (userInformationModel) {
         const featuredPlaylistRequestObj = {
            country: userInformationModel.country,
            timestamp: userInformationModel.country
         }
         getFeaturedPlaylists(featuredPlaylistRequestObj)

         const newReleasesRequestObj = {
            country: userInformationModel.country
         }
         getNewReleases(newReleasesRequestObj)
      }
   }, [userInformationModel?.country]) // Doubt: Why do we need to put this

   const getFeaturedPlaylistsView = () => {
      if (featuredPlaylistsModel) {
         const { playlists } = featuredPlaylistsModel
         return playlists.map(eachPlaylist => {
            const { id } = eachPlaylist
            return (
               <SpotifyItem
                  key={id}
                  itemDetails={eachPlaylist}
                  redirectPath={`/playlists/${id}/`}
               />
            )
         })
      }
      return null
   }

   const getBrowseCategoriesView = () => {
      if (browseCategoriesModel) {
         const { categories } = browseCategoriesModel
         return categories.map(eachCategory => {
            const { id } = eachCategory
            return (
               <SpotifyItem
                  key={id}
                  itemDetails={eachCategory}
                  redirectPath={`/categories/${id}/playlists?country=${userInformationModel?.country}/`} // is this fine?
               />
            )
         })
      }
      return null
   }

   const getNewReleasesView = () => {
      if (newReleasesModel) {
         const { albums } = newReleasesModel
         return albums.map(eachAlbum => {
            const { id } = eachAlbum
            return (
               <SpotifyItem
                  key={id}
                  itemDetails={eachAlbum}
                  redirectPath={`/albums/${id}/`}
               />
            )
         })
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
         <NavBar />
         <HomeContentContainer>
            {featuredPlaylistsModel &&
               renderHomeSection(
                  featuredPlaylistsModel.message,
                  getFeaturedPlaylistsView
               )}
            {renderHomeSection(
               t(`${i18nHomePath}browseCategoriesSection`),
               getBrowseCategoriesView
            )}
            {renderHomeSection(
               t(`${i18nHomePath}newReleasesSection`),
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
