import getFeaturedPlaylists from '../../fixtures/getFeaturedPlaylists.json'
import getBrowseCategories from '../../fixtures/getBrowseCategories.json'
import getNewReleases from '../../fixtures/getNewReleases.json'
import getPlaylistDetails from '../../fixtures/getPlaylistDetails.json'
import getAlbumDetails from '../../fixtures/getAlbumDetails.json'
import getCategoryPlaylists from '../../fixtures/getCategoryPlaylists.json'
import getYourMusic from '../../fixtures/getYourMusic.json'
import getUserPlaylists from '../../fixtures/getUserPlaylists.json'

import {
   GetPlaylistDetailsResponseType,
   GetAlbumDetailsResponseType,
   GetCategoryPlaylistsResponseType,
   IdCountryRequestType,
   GetYourMusicResponseType,
   GetUserPlaylistsResponseType
} from '../../stores/typesv2'

import {
   GetFeaturedPlaylistsRequestType,
   GetFeaturedPlaylistsResponseType,
   GetBrowseCategoriesResponseType,
   GetNewReleasesResponseType,
   CountryRequestType,
   IdRequestType
} from '../../stores/types'
import { resolveWithTimeout } from '../../../Common/utils/TestUtils'
import MusicService from '.'

class MusicServiceFixture implements MusicService {
   getFeaturedPlaylists(
      requestObject: GetFeaturedPlaylistsRequestType
   ): Promise<GetFeaturedPlaylistsResponseType> {
      return resolveWithTimeout(getFeaturedPlaylists)
   }

   getBrowseCategories(): Promise<GetBrowseCategoriesResponseType> {
      return resolveWithTimeout(getBrowseCategories)
   }

   getNewReleases(
      requestObject: CountryRequestType
   ): Promise<GetNewReleasesResponseType> {
      return resolveWithTimeout(getNewReleases)
   }

   getPlaylistDetails(
      requestObject: IdRequestType
   ): Promise<GetPlaylistDetailsResponseType> {
      return resolveWithTimeout(getPlaylistDetails)
   }

   getAlbumDetails(
      requestObject: IdRequestType
   ): Promise<GetAlbumDetailsResponseType> {
      return resolveWithTimeout(getAlbumDetails)
   }

   getCategoryPlaylists(
      requestObject: IdCountryRequestType
   ): Promise<GetCategoryPlaylistsResponseType> {
      return resolveWithTimeout(getCategoryPlaylists)
   }

   getYourMusic(): Promise<GetYourMusicResponseType> {
      return resolveWithTimeout(getYourMusic)
   }

   getUserPlaylists(
      requestObject: IdRequestType
   ): Promise<GetUserPlaylistsResponseType> {
      return resolveWithTimeout(getUserPlaylists)
   }
}

export default MusicServiceFixture
