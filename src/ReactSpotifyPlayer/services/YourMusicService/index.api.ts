import { create, ApisauceInstance } from 'apisauce'
import { apiMethods } from '../../../Common/constants/APIConstants'
import {
   GetUserPlaylistsResponseType,
   GetYourMusicResponseType
} from '../../stores/types'

import { IdRequestType } from '../../stores/types'
import endpoints from '../endpoints'
import { BASE_URL } from '../../../Common/constants/NavigationConstants'
import YourMusicService from '.'

class YourMusicServiceApi implements YourMusicService {
   api: ApisauceInstance
   networkCallWithApisauce: Promise<any> | any

   constructor(networkCallWithApisauce: Promise<any> | any) {
      this.api = create({
         baseURL: BASE_URL
      })
      this.networkCallWithApisauce = networkCallWithApisauce
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

export default YourMusicServiceApi
