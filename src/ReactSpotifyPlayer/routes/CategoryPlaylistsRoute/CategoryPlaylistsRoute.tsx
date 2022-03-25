import { API_FETCHING, API_SUCCESS } from '@ib/api-constants'
import { observer } from 'mobx-react'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { MusicStoreContext } from '../../../Common/stores/StoresContext'

import LoadingView from '../../components/LoadingView/LoadingView'
import Playlists from '../../components/Playlists/Playlists'
import useUserInformation from '../../hooks/useUserInformation'
import { IdCountryRequestType } from '../../stores/types'

const CategoryPlaylistsRoute = observer(() => {
   const params: IdCountryRequestType = useParams()
   const userInformationModel = useUserInformation()

   const {
      categoryPlaylistsModel,
      getCategoryPlaylists,
      getCategoryPlaylistsApiStatus,
      browseCategoriesModel
   } = useContext(MusicStoreContext)

   const getCategoryName = () => {
      if (browseCategoriesModel) {
         const { categories } = browseCategoriesModel
         return categories.find(item => item.id === params.id)?.name
      }
   }

   useEffect(() => {
      const { id } = params
      const requestObj = {
         id: id,
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
