import getFeaturedPlaylists from '../../fixtures/getFeaturedPlaylists.json'
import getPlaylistDetails from '../../fixtures/getPlaylistDetails.json'
import {
   GetFeaturedPlaylistsRequestType,
   GetFeaturedPlaylistsResponseType,
   GetPlaylistDetailsResponseType,
   IdRequestType
} from '../../stores/types'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import FeaturedPlaylistService from '.'

class FeaturedPlaylistServiceFixture implements FeaturedPlaylistService {
   getFeaturedPlaylists(
      requestObject: GetFeaturedPlaylistsRequestType
   ): Promise<GetFeaturedPlaylistsResponseType> {
      return resolveWithTimeout(getFeaturedPlaylists)
   }

   getPlaylistDetails(
      requestObject: IdRequestType
   ): Promise<GetPlaylistDetailsResponseType> {
      return resolveWithTimeout(getPlaylistDetails)
   }
}

export default FeaturedPlaylistServiceFixture
