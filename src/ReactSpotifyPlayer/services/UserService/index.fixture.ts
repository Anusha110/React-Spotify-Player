import { GetUserInformationResponseType } from '../../stores/types'
import getUserInformation from '../../fixtures/getUserInformation.json'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import UserService from '.'

class UserServiceFixture implements UserService {
   getUserInformation(): Promise<GetUserInformationResponseType> {
      return resolveWithTimeout(getUserInformation)
   }
}

export default UserServiceFixture
