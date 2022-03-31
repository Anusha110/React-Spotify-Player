import {
   APIStatus,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '@ib/api-constants'
import { observable, action } from 'mobx'

import AlbumDetailsModel from '../models/AlbumDetailsModel'
import NewReleasesModel from '../models/NewReleasesModel'
import { GetAlbumDetailsResponseType } from '../types'

import {
   GetNewReleasesResponseType,
   CountryRequestType,
   IdRequestType
} from '../../stores/types'
import NewReleaseService from '../../services/NewReleaseService'

export class NewReleaseStore {
   newReleasesService!: NewReleaseService

   @observable
   newReleasesModel!: NewReleasesModel | null
   @observable getNewReleasesApiStatus!: APIStatus
   @observable getNewReleasesApiError!: string

   @observable
   albumDetailsModel!: AlbumDetailsModel | null
   @observable getAlbumDetailsApiStatus!: APIStatus
   @observable getAlbumDetailsApiError!: string

   constructor(service: NewReleaseService) {
      this.newReleasesService = service
      this.init()
   }

   @action.bound
   init(): void {
      this.newReleasesModel = null
      this.getNewReleasesApiStatus = API_INITIAL
      this.getNewReleasesApiError = ''

      this.albumDetailsModel = null
      this.getAlbumDetailsApiStatus = API_INITIAL
      this.getAlbumDetailsApiError = ''
   }

   @action.bound
   clearStore(): void {
      this.init()
   }

   @action
   setGetNewReleasesApiStatus = (status: APIStatus): void => {
      this.getNewReleasesApiStatus = status
   }

   @action
   setGetNewReleasesApiError = (error: string): void => {
      this.getNewReleasesApiError = error
   }

   @action
   setGetNewReleasesApiResponse = (
      response: GetNewReleasesResponseType | null
   ): void => {
      if (response) {
         this.newReleasesModel = new NewReleasesModel(response)
      }
   }

   @action
   getNewReleases = async (requestObject: CountryRequestType) => {
      this.setGetNewReleasesApiStatus(API_FETCHING)
      const getNewReleasesResponse: any = await this.newReleasesService.getNewReleases(
         requestObject
      )
      const jsonData = await getNewReleasesResponse.json()
      if (getNewReleasesResponse.ok) {
         this.setGetNewReleasesApiResponse(jsonData)
         this.setGetNewReleasesApiStatus(API_SUCCESS)
      } else {
         this.setGetNewReleasesApiStatus(API_FAILED)
         this.setGetNewReleasesApiError(jsonData.error_msg)
      }
   }

   @action
   setGetAlbumDetailsApiStatus = (status: APIStatus): void => {
      this.getAlbumDetailsApiStatus = status
   }

   @action
   setGetAlbumDetailsApiError = (error: string): void => {
      this.getAlbumDetailsApiError = error
   }

   @action
   setGetAlbumDetailsApiResponse = (
      response: GetAlbumDetailsResponseType | null
   ): void => {
      if (response) {
         this.albumDetailsModel = new AlbumDetailsModel(response)
      }
   }

   @action
   getAlbumDetails = async (requestObject: IdRequestType) => {
      this.setGetAlbumDetailsApiStatus(API_FETCHING)
      const getAlbumDetailsResponse: any = await this.newReleasesService.getAlbumDetails(
         requestObject
      )
      const jsonData = await getAlbumDetailsResponse.json()
      if (getAlbumDetailsResponse.ok) {
         this.setGetAlbumDetailsApiResponse(jsonData)
         this.setGetAlbumDetailsApiStatus(API_SUCCESS)
      } else {
         this.setGetAlbumDetailsApiStatus(API_FAILED)
         this.setGetAlbumDetailsApiError(jsonData.error_msg)
      }
   }
}
