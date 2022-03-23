import {
   APIStatus,
   API_FAILED,
   API_FETCHING,
   API_INITIAL,
   API_SUCCESS
} from '@ib/api-constants'
import { observable, action } from 'mobx'
import UserService from '../../services/UserService'
import UserInformationModel from '../modelsv2/UserInformationModel'
import { GetUserInformationResponseType } from '../typesv2'

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
         console.log('change model')
         this.userInformationModel = new UserInformationModel(response)
      }
   }

   @action
   getUserInformation = async (
      onSubmitSuccess = (): void | null => null,
      onSubmitFailure = () => null
   ) => {
      console.log('get user info')
      this.setGetUserInformationApiStatus(API_FETCHING)
      const getUserInformationResponse: any = await this.userService.getUserInformation()
      console.log(getUserInformationResponse, 'getUserInformationResponse')
      const jsonData = await getUserInformationResponse.json()
      console.log(jsonData, 'jsonData')
      if (getUserInformationResponse.ok) {
         this.setGetUserInformationApiResponse(jsonData)
         this.setGetUserInformationApiStatus(API_SUCCESS)
         onSubmitSuccess()
      } else {
         this.setGetUserInformationApiStatus(API_FAILED)
         this.setGetUserInformationApiError(jsonData.error_msg)
      }
   }
}
