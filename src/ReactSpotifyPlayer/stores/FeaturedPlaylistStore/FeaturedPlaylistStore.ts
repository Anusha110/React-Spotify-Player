import {
   APIStatus,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '@ib/api-constants'
import { observable, action } from 'mobx'
import FeaturedPlaylistService from '../../services/FeaturedPlaylistService'

import FeaturedPlaylistsModel from '../models/FeaturedPlaylistsModel'
import PlaylistDetailsModel from '../models/PlaylistDetailsModel'
import { GetPlaylistDetailsResponseType } from '../types'

import {
   GetFeaturedPlaylistsRequestType,
   GetFeaturedPlaylistsResponseType,
   IdRequestType
} from '../types'

export class FeaturedPlaylistStore {
   featuredPlaylistService!: FeaturedPlaylistService

   @observable
   featuredPlaylistsModel!: FeaturedPlaylistsModel | null
   @observable getFeaturedPlaylistsApiStatus!: APIStatus
   @observable getFeaturedPlaylistsApiError!: string

   @observable
   playlistDetailsModel!: PlaylistDetailsModel | null
   @observable getPlaylistDetailsApiStatus!: APIStatus
   @observable getPlaylistDetailsApiError!: string

   constructor(service: FeaturedPlaylistService) {
      this.featuredPlaylistService = service
      this.init()
   }

   @action.bound
   init(): void {
      this.featuredPlaylistsModel = null
      this.getFeaturedPlaylistsApiStatus = API_INITIAL
      this.getFeaturedPlaylistsApiError = ''

      this.playlistDetailsModel = null
      this.getPlaylistDetailsApiStatus = API_INITIAL
      this.getPlaylistDetailsApiError = ''
   }

   @action.bound
   clearStore(): void {
      this.init()
   }

   @action
   setGetFeaturedPlaylistsApiStatus = (status: APIStatus): void => {
      this.getFeaturedPlaylistsApiStatus = status
   }

   @action
   setGetFeaturedPlaylistsApiError = (error: string): void => {
      this.getFeaturedPlaylistsApiError = error
   }

   @action
   setGetFeaturedPlaylistsResponse = (
      response: GetFeaturedPlaylistsResponseType | null
   ): void => {
      if (response) {
         this.featuredPlaylistsModel = new FeaturedPlaylistsModel(response)
      }
   }

   @action
   getFeaturedPlaylists = async (
      requestObject: GetFeaturedPlaylistsRequestType
   ) => {
      this.setGetFeaturedPlaylistsApiStatus(API_FETCHING)
      const getFeaturedPlaylistsResponse: any = await this.featuredPlaylistService.getFeaturedPlaylists(
         requestObject
      )
      const jsonData = await getFeaturedPlaylistsResponse.json()
      if (getFeaturedPlaylistsResponse.ok) {
         this.setGetFeaturedPlaylistsResponse(jsonData)
         this.setGetFeaturedPlaylistsApiStatus(API_SUCCESS)
      } else {
         this.setGetFeaturedPlaylistsApiStatus(API_FAILED)
         this.setGetFeaturedPlaylistsApiError(jsonData.error_msg)
      }
   }

   @action
   setGetPlaylistDetailsApiStatus = (status: APIStatus): void => {
      this.getPlaylistDetailsApiStatus = status
   }

   @action
   setGetPlaylistDetailsApiError = (error: string): void => {
      this.getPlaylistDetailsApiError = error
   }

   @action
   setGetPlaylistDetailsApiResponse = (
      response: GetPlaylistDetailsResponseType | null
   ): void => {
      if (response) {
         this.playlistDetailsModel = new PlaylistDetailsModel(response)
      }
   }

   @action
   getPlaylistDetails = async (requestObject: IdRequestType) => {
      this.setGetPlaylistDetailsApiStatus(API_FETCHING)
      const getPlaylistDetailsResponse: any = await this.featuredPlaylistService.getPlaylistDetails(
         requestObject
      )
      const jsonData = await getPlaylistDetailsResponse.json()
      if (getPlaylistDetailsResponse.ok) {
         this.setGetPlaylistDetailsApiResponse(jsonData)
         this.setGetPlaylistDetailsApiStatus(API_SUCCESS)
      } else {
         this.setGetPlaylistDetailsApiStatus(API_FAILED)
         this.setGetPlaylistDetailsApiError(jsonData.error_msg)
      }
   }
}
