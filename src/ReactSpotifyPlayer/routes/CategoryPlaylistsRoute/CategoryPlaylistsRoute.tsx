import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import { observer } from 'mobx-react'
import React, { useContext, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import {
   MusicStoreContext,
   UserStoreContext
} from '../../../Common/stores/StoresContext'
import LoadingView from '../../components/LoadingView/LoadingView'
import Playlists from '../../components/Playlists/Playlists'
import { IdCountryRequestType } from '../../stores/typesv2'

const CategoryPlaylistsRoute = observer(() => {
   const params: IdCountryRequestType = useParams()
   const history = useHistory()
   const {
      categoryPlaylistsModel,
      getCategoryPlaylists,
      getCategoryPlaylistsApiStatus,
      browseCategoriesModel
   } = useContext(MusicStoreContext)
   const { userInformationModel, getUserInformation } = useContext(
      UserStoreContext
   )

   const getCategoryName = () => {
      if (browseCategoriesModel) {
         const { categories } = browseCategoriesModel
         const { items } = categories

         const catgoryItem = items.find(item => item.id === params.id)
         return catgoryItem?.name
      }
   }

   useEffect(() => {
      if (userInformationModel === null) {
         getUserInformation()
      }
      const requestObj = {
         id: params.id,
         country: userInformationModel?.country as string
      }
      getCategoryPlaylists(requestObj)
   }, [])

   const renderSuccessView = () => {
      if (categoryPlaylistsModel) {
         const { playlists } = categoryPlaylistsModel
         return (
            <Playlists
               title={getCategoryName() as string}
               playlists={playlists}
               redirectPath={`/playlists/`}
            />
         )
      }
      return null
   }

   const renderPlaylists = () => {
      switch (getCategoryPlaylistsApiStatus) {
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

export default CategoryPlaylistsRoute
