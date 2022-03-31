import { create, ApisauceInstance } from 'apisauce'
import { apiMethods } from '../../../Common/constants/APIConstants'
import {
   GetCategoryPlaylistsResponseType,
   IdCountryRequestType
} from '../../stores/types'

import endpoints from '../endpoints'
import { BASE_URL } from '../../../Common/constants/NavigationConstants'

import CategoryPlaylistService from '.'

class CategoryPlaylistServiceApi implements CategoryPlaylistService {
   api: ApisauceInstance
   networkCallWithApisauce: Promise<any> | any

   constructor(networkCallWithApisauce: Promise<any> | any) {
      this.api = create({
         baseURL: BASE_URL
      })
      this.networkCallWithApisauce = networkCallWithApisauce
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
}

export default CategoryPlaylistServiceApi
