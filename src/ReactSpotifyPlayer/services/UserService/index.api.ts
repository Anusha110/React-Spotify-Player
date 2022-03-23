import { create, ApisauceInstance } from 'apisauce'
import { apiMethods } from '../../../Common/constants/APIConstants'
import { GetUserInformationResponseType } from '../../stores/typesv2'
import endpoints from '../endpoints'
import { BASE_URL } from '../../../Common/constants/NavigationConstants'
import UserService from '.'

class UserServiceApi implements UserService {
   api: ApisauceInstance
   networkCallWithApisauce: Promise<any> | any

   constructor(networkCallWithApisauce: Promise<any> | any) {
      this.api = create({
         baseURL: BASE_URL
      })
      this.networkCallWithApisauce = networkCallWithApisauce
   }

   getUserInformation(): Promise<GetUserInformationResponseType> {
      return this.networkCallWithApisauce(
         BASE_URL,
         endpoints.profile,
         {},
         apiMethods.get
      )
   }
}

export default UserServiceApi
