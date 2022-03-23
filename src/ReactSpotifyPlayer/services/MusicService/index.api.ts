import { create, ApisauceInstance } from 'apisauce'
import moment from 'moment'
import { apiMethods } from '../../../Common/constants/APIConstants'
import {
   GetAlbumDetailsResponseType,
   GetCategoryPlaylistsResponseType,
   GetPlaylistDetailsResponseType,
   GetUserPlaylistsResponseType,
   GetYourMusicResponseType,
   IdCountryRequestType
} from '../../stores/typesv2'

import {
   GetFeaturedPlaylistsRequestType,
   GetFeaturedPlaylistsResponseType,
   GetBrowseCategoriesResponseType,
   GetNewReleasesResponseType,
   CountryRequestType,
   IdRequestType
} from '../../stores/types'
import endpoints from '../endpoints'
import { BASE_URL } from '../../../Common/constants/NavigationConstants'
import MusicService from '../MusicService'

class MusicServiceApi implements MusicService {
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

   getBrowseCategories(): Promise<GetBrowseCategoriesResponseType> {
      return this.networkCallWithApisauce(
         BASE_URL,
         endpoints.browseCategories,
         {},
         apiMethods.get
      )
   }

   getNewReleases(
      requestObject: CountryRequestType
   ): Promise<GetNewReleasesResponseType> {
      const queryParams = `?country=${requestObject.country}`
      return this.networkCallWithApisauce(
         BASE_URL,
         endpoints.newReleases + queryParams,
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

   getAlbumDetails(
      requestObject: IdRequestType
   ): Promise<GetAlbumDetailsResponseType> {
      return this.networkCallWithApisauce(
         BASE_URL,
         `${endpoints.albumDetails}${requestObject.id}/`,
         {},
         apiMethods.get
      )
   }

   getCategoryPlaylists(
      requestObject: IdCountryRequestType
   ): Promise<GetCategoryPlaylistsResponseType> {
      return this.networkCallWithApisauce(
         BASE_URL,
         `${endpoints.browseCategories}/${requestObject.id}/${endpoints.playlists}/`,
         {},
         apiMethods.get
      )
   }

   getYourMusic(): Promise<GetYourMusicResponseType> {
      return this.networkCallWithApisauce(
         BASE_URL,
         endpoints.yourMusic,
         {},
         apiMethods.get
      )
   }

   getUserPlaylists(
      requestObject: IdRequestType
   ): Promise<GetUserPlaylistsResponseType> {
      return this.networkCallWithApisauce(
         BASE_URL,
         `${endpoints.users}${requestObject.id}/${endpoints.playlists}`,
         {},
         apiMethods.get
      )
   }
}

export default MusicServiceApi
