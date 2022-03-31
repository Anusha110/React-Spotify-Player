import {
   APIStatus,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '@ib/api-constants'
import { observable, action } from 'mobx'
import CategoryPlaylistServiceApi from '../../services/CategoryPlaylistService/index.api'
import CategoryPlaylistsModel from '../models/CategoryPlaylistsModel'

import {
   GetCategoryPlaylistsResponseType,
   IdCountryRequestType
} from '../types'

export class CategoryPlaylistStore {
   categoryPlaylistService!: CategoryPlaylistServiceApi

   @observable
   categoryPlaylistsModel!: CategoryPlaylistsModel | null
   @observable getCategoryPlaylistsApiStatus!: APIStatus
   @observable getCategoryPlaylistsApiError!: string

   constructor(service: CategoryPlaylistServiceApi) {
      this.categoryPlaylistService = service
      this.init()
   }

   @action.bound
   init(): void {
      this.categoryPlaylistsModel = null
      this.getCategoryPlaylistsApiStatus = API_INITIAL
      this.getCategoryPlaylistsApiError = ''
   }

   @action.bound
   clearStore(): void {
      this.init()
   }

   @action
   setGetCategoryPlaylistsApiStatus = (status: APIStatus): void => {
      this.getCategoryPlaylistsApiStatus = status
   }

   @action
   setGetCategoryPlaylistsApiError = (error: string): void => {
      this.getCategoryPlaylistsApiError = error
   }

   @action
   setGetCategoryPlaylistsApiResponse = (
      response: GetCategoryPlaylistsResponseType | null
   ): void => {
      if (response) {
         this.categoryPlaylistsModel = new CategoryPlaylistsModel(response)
      }
   }

   @action
   getCategoryPlaylists = async (requestObject: IdCountryRequestType) => {
      this.setGetCategoryPlaylistsApiStatus(API_FETCHING)
      const getCategoryPlaylistsResponse: any = await this.categoryPlaylistService.getCategoryPlaylists(
         requestObject
      )
      const jsonData = await getCategoryPlaylistsResponse.json()
      if (getCategoryPlaylistsResponse.ok) {
         this.setGetCategoryPlaylistsApiResponse(jsonData)
         this.setGetCategoryPlaylistsApiStatus(API_SUCCESS)
      } else {
         this.setGetCategoryPlaylistsApiStatus(API_FAILED)
         this.setGetCategoryPlaylistsApiError(jsonData.error_msg)
      }
   }
}
