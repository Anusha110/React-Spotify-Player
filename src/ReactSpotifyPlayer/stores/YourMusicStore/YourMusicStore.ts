import {
   APIStatus,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '@ib/api-constants'
import { observable, action } from 'mobx'

import MusicService from '../../services/MusicService'
import UserPlaylistsModel from '../models/UsersPlaylistsModel'
import YourMusicModel from '../models/YourMusicModel'
import {
   GetYourMusicResponseType,
   GetUserPlaylistsResponseType
} from '../types'

import { IdRequestType } from '../../stores/types'

export class YourMusicStore {
   musicService!: MusicService

   @observable
   yourMusicModel!: YourMusicModel | null
   @observable getYourMusicApiStatus!: APIStatus
   @observable getYourMusicApiError!: string

   @observable
   userPlaylistsModel!: UserPlaylistsModel | null
   @observable getUserPlaylistsApiStatus!: APIStatus
   @observable getUserPlaylistsApiError!: string

   constructor(service: MusicService) {
      this.musicService = service
      this.init()
   }

   @action.bound
   init(): void {
      this.yourMusicModel = null
      this.getYourMusicApiStatus = API_INITIAL
      this.getYourMusicApiError = ''

      this.userPlaylistsModel = null
      this.getUserPlaylistsApiStatus = API_INITIAL
      this.getUserPlaylistsApiError = ''
   }

   @action.bound
   clearStore(): void {
      this.init()
   }

   @action
   setGetYourMusicApiStatus = (status: APIStatus): void => {
      this.getYourMusicApiStatus = status
   }

   @action
   setGetYourMusicApiError = (error: string): void => {
      this.getYourMusicApiError = error
   }

   @action
   setGetYourMusicApiResponse = (
      response: GetYourMusicResponseType | null
   ): void => {
      if (response) {
         this.yourMusicModel = new YourMusicModel(response)
      }
   }

   @action
   getYourMusic = async () => {
      this.setGetYourMusicApiStatus(API_FETCHING)
      const getYourMusicResponse: any = await this.musicService.getYourMusic()
      const jsonData = await getYourMusicResponse.json()
      if (getYourMusicResponse.ok) {
         this.setGetYourMusicApiResponse(jsonData)
         this.setGetYourMusicApiStatus(API_SUCCESS)
      } else {
         this.setGetYourMusicApiStatus(API_FAILED)
         this.setGetYourMusicApiError(jsonData.error_msg)
      }
   }

   @action
   setGetUserPlaylistsApiStatus = (status: APIStatus): void => {
      this.getUserPlaylistsApiStatus = status
   }

   @action
   setGetUserPlaylistsApiError = (error: string): void => {
      this.getUserPlaylistsApiError = error
   }

   @action
   setGetUserPlaylistsApiResponse = (
      response: GetUserPlaylistsResponseType | null
   ): void => {
      if (response) {
         this.userPlaylistsModel = new UserPlaylistsModel(response)
      }
   }

   @action
   getUserPlaylists = async (requestObject: IdRequestType) => {
      this.setGetUserPlaylistsApiStatus(API_FETCHING)
      const getUserPlaylistsApiResponse: any = await this.musicService.getUserPlaylists(
         requestObject
      )
      const jsonData = await getUserPlaylistsApiResponse.json()
      if (getUserPlaylistsApiResponse.ok) {
         this.setGetUserPlaylistsApiResponse(jsonData)
         this.setGetUserPlaylistsApiStatus(API_SUCCESS)
      } else {
         this.setGetUserPlaylistsApiStatus(API_FAILED)
         this.setGetUserPlaylistsApiError(jsonData.error_msg)
      }
   }
}
