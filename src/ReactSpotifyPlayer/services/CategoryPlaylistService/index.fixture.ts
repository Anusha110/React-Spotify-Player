import getFeaturedPlaylists from '../../fixtures/getFeaturedPlaylists.json'
import getBrowseCategories from '../../fixtures/getBrowseCategories.json'
import getNewReleases from '../../fixtures/getNewReleases.json'
import getPlaylistDetails from '../../fixtures/getPlaylistDetails.json'
import getAlbumDetails from '../../fixtures/getAlbumDetails.json'
import getCategoryPlaylists from '../../fixtures/getCategoryPlaylists.json'
import getYourMusic from '../../fixtures/getYourMusic.json'
import getUserPlaylists from '../../fixtures/getUserPlaylists.json'
import {
   GetFeaturedPlaylistsRequestType,
   GetFeaturedPlaylistsResponseType,
   GetBrowseCategoriesResponseType,
   GetNewReleasesResponseType,
   CountryRequestType,
   IdRequestType,
   GetAlbumDetailsResponseType,
   GetCategoryPlaylistsResponseType,
   GetPlaylistDetailsResponseType,
   GetUserPlaylistsResponseType,
   GetYourMusicResponseType,
   IdCountryRequestType
} from '../../stores/types'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import CategoryPlaylistService from '.'

class CategoryPlaylistServiceFixture implements CategoryPlaylistService {
   getCategoryPlaylists(
      requestObject: IdCountryRequestType
   ): Promise<GetCategoryPlaylistsResponseType> {
      return resolveWithTimeout(getCategoryPlaylists)
   }
}

export default CategoryPlaylistServiceFixture
