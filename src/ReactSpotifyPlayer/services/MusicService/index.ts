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

interface MusicService {
   getFeaturedPlaylists(
      requestObject: GetFeaturedPlaylistsRequestType
   ): Promise<GetFeaturedPlaylistsResponseType>

   getBrowseCategories(): Promise<GetBrowseCategoriesResponseType>

   getNewReleases(
      requestObject: CountryRequestType
   ): Promise<GetNewReleasesResponseType>

   getPlaylistDetails(
      requestObject: IdRequestType
   ): Promise<GetPlaylistDetailsResponseType>

   getAlbumDetails(
      requestObject: IdRequestType
   ): Promise<GetAlbumDetailsResponseType>

   getCategoryPlaylists(
      requestObject: IdCountryRequestType
   ): Promise<GetCategoryPlaylistsResponseType>

   getYourMusic(): Promise<GetYourMusicResponseType>

   getUserPlaylists(
      requestObject: IdRequestType
   ): Promise<GetUserPlaylistsResponseType>
}

export default MusicService
