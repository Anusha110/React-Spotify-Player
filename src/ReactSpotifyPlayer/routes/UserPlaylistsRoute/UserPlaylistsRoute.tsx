import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import { observer } from 'mobx-react'
import React, { useContext, useEffect } from 'react'
import {
   MusicStoreContext,
   UserStoreContext
} from '../../../Common/stores/StoresContext'
import LoadingView from '../../components/LoadingView/LoadingView'
import Playlists from '../../components/Playlists/Playlists'

const UserPlaylistsRoute = observer(() => {
   const { userInformationModel, getUserInformation } = useContext(
      UserStoreContext
   )
   const {
      userPlaylistsModel,
      getUserPlaylists,
      getUserPlaylistsApiStatus
   } = useContext(MusicStoreContext)

   useEffect(() => {
      if (userInformationModel === null) {
         getUserInformation()
      }

      if (userInformationModel) {
         getUserPlaylists({ id: userInformationModel.id })
      }
   }, [])

   const renderSuccessView = () => {
      if (userPlaylistsModel) {
         const { items } = userPlaylistsModel
         return (
            <Playlists
               title='Your Playlists'
               playlists={items}
               redirectPath={`/users/${userInformationModel?.id}/playlists/`}
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
