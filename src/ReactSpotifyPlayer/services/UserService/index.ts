import { GetUserInformationResponseType } from '../../stores/typesv2'

interface UserService {
   getUserInformation(): Promise<GetUserInformationResponseType>
}

export default UserService
