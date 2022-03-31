import getNewReleases from '../../fixtures/getNewReleases.json'
import getAlbumDetails from '../../fixtures/getAlbumDetails.json'
import {
   GetNewReleasesResponseType,
   CountryRequestType,
   IdRequestType,
   GetAlbumDetailsResponseType
} from '../../stores/types'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import NewReleaseService from '.'

class NewReleaseServiceFixture implements NewReleaseService {
   getNewReleases(
      requestObject: CountryRequestType
   ): Promise<GetNewReleasesResponseType> {
      return resolveWithTimeout(getNewReleases)
   }

   getAlbumDetails(
      requestObject: IdRequestType
   ): Promise<GetAlbumDetailsResponseType> {
      return resolveWithTimeout(getAlbumDetails)
   }
}

export default NewReleaseServiceFixture
