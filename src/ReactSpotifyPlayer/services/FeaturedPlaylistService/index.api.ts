import { create, ApisauceInstance } from 'apisauce'
import moment from 'moment'
import { apiMethods } from '../../../Common/constants/APIConstants'
import { GetPlaylistDetailsResponseType } from '../../stores/types'

import {
   GetFeaturedPlaylistsRequestType,
   GetFeaturedPlaylistsResponseType,
   IdRequestType
} from '../../stores/types'
import endpoints from '../endpoints'
import { BASE_URL } from '../../../Common/constants/NavigationConstants'
import FeaturedPlaylistService from '.'

class FeaturedPlaylistServiceApi implements FeaturedPlaylistService {
   api: ApisauceInstance
   networkCallWithApisauce: Promise<any> | any

   constructor(networkCallWithApisauce: Promise<any> | any) {
      this.api = create({
         baseURL: BASE_URL
      })
      this.networkCallWithApisauce = networkCallWithApisauce
   }

   getFeaturedPlaylists(
      requestObject: GetFeaturedPlaylistsRequestType
   ): Promise<GetFeaturedPlaylistsResponseType> {
      const timeStamp = moment(new Date()).format(requestObject.timestamp)
      const queryParams = `?country=${requestObject.country}`
      // &timestamp=${timeStamp}

      return this.networkCallWithApisauce(
         BASE_URL,
         endpoints.featuredPlaylists + queryParams,
         {},
         apiMethods.get
      )
   }

   getPlaylistDetails(
      requestObject: IdRequestType
   ): Promise<GetPlaylistDetailsResponseType> {
      return this.networkCallWithApisauce(
         BASE_URL,
         `${endpoints.playlistDetails}${requestObject.id}/`,
         {},
         apiMethods.get
      )
   }
}

export default FeaturedPlaylistServiceApi
