import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import { observer } from 'mobx-react'
import React, { useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { MusicStoreContext } from '../../../Common/stores/StoresContext'

import LoadingView from '../../components/LoadingView/LoadingView'
import Playlists from '../../components/Playlists/Playlists'
import useUserInformation from '../../hooks/useUserInformation'

const UserPlaylistsRoute = observer(() => {
   const { t } = useTranslation()
   const userInformationModel = useUserInformation()
   const {
      userPlaylistsModel,
      getUserPlaylists,
      getUserPlaylistsApiStatus
   } = useContext(MusicStoreContext)

   useEffect(() => {
      if (userInformationModel) {
         getUserPlaylists({ id: userInformationModel.id })
      }
   }, [])

   const renderSuccessView = () => {
      if (userPlaylistsModel) {
         const { items } = userPlaylistsModel
         const path = `/users/${userInformationModel?.id}/playlists/`
         return (
            <Playlists
               title={t(`reactSpotifyPlayer:userPlaylists.pageTitle`)}
               playlists={items}
               redirectPath={path}
            />
         )
      }
      return null
   }

   const renderPlaylists = () => {
      switch (getUserPlaylistsApiStatus) {
         case API_FETCHING:
            return <LoadingView />
         case API_SUCCESS:
            return renderSuccessView()
         default:
            null
      }
   }

   return <>{renderPlaylists()}</>
})

export default UserPlaylistsRoute
