import {
   APIStatus,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '@ib/api-constants'
import { observable, action } from 'mobx'

import UserService from '../../services/UserService'
import UserInformationModel from '../models/UserInformationModel'
import { GetUserInformationResponseType } from '../types'

export class UserStore {
   userService: UserService
   @observable userInformationModel!: UserInformationModel | null
   @observable getUserInformationApiStatus!: APIStatus
   @observable getUserInformationApiError!: string

   constructor(service: UserService) {
      this.userService = service
      this.init()
   }

   @action.bound
   init(): void {
      this.userInformationModel = null
      this.getUserInformationApiStatus = API_INITIAL
      this.getUserInformationApiError = ''
   }

   @action
   setGetUserInformationApiStatus = (status: APIStatus): void => {
      this.getUserInformationApiStatus = status
   }

   @action
   setGetUserInformationApiError = (error: string): void => {
      this.getUserInformationApiError = status
   }

   @action
   setGetUserInformationApiResponse = (
      response: GetUserInformationResponseType | null
   ): void => {
      if (response) {
         this.userInformationModel = new UserInformationModel(response)
      }
   }

   @action
   getUserInformation = async () => {
      this.setGetUserInformationApiStatus(API_FETCHING)
      const getUserInformationResponse: any = await this.userService.getUserInformation()
      const jsonData = await getUserInformationResponse.json()
      if (getUserInformationResponse.ok) {
         this.setGetUserInformationApiResponse(jsonData)
         this.setGetUserInformationApiStatus(API_SUCCESS)
      } else {
         this.setGetUserInformationApiStatus(API_FAILED)
         this.setGetUserInformationApiError(jsonData.error_msg)
      }
   }
}
