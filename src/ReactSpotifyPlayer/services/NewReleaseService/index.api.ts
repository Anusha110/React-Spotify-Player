import { create, ApisauceInstance } from 'apisauce'
import { apiMethods } from '../../../Common/constants/APIConstants'
import { GetAlbumDetailsResponseType } from '../../stores/types'

import {
   GetNewReleasesResponseType,
   CountryRequestType,
   IdRequestType
} from '../../stores/types'
import endpoints from '../endpoints'
import { BASE_URL } from '../../../Common/constants/NavigationConstants'

class NewReleaseServiceApi implements NewReleaseServiceApi {
   api: ApisauceInstance
   networkCallWithApisauce: Promise<any> | any

   constructor(networkCallWithApisauce: Promise<any> | any) {
      this.api = create({
         baseURL: BASE_URL
      })
      this.networkCallWithApisauce = networkCallWithApisauce
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
}

export default NewReleaseServiceApi
