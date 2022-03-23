import {
   GetFeaturedPlaylistsRequestType,
   GetFeaturedPlaylistsResponseType,
   FormattedGetBrowseCategoriesResponseType,
   GetNewReleasesResponseType,
   CountryRequestType,
   GetPlaylistDetailsResponseType,
   IdRequestType,
   GetAlbumDetailsResponseType,
   GetCategoryPlaylistsResponseType,
   IdCountryRequestType,
   GetYourMusicResponseType,
   GetUserPlaylistsResponseType
} from '../../stores/typesv2'

interface MusicService {
   getFeaturedPlaylists(
      requestObject: GetFeaturedPlaylistsRequestType
   ): Promise<GetFeaturedPlaylistsResponseType>

   getBrowseCategories(): Promise<FormattedGetBrowseCategoriesResponseType>

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
