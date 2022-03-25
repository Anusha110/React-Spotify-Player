import { GetUserInformationResponseType } from '../../stores/types'

interface UserService {
   getUserInformation(): Promise<GetUserInformationResponseType>
}

export default UserService
