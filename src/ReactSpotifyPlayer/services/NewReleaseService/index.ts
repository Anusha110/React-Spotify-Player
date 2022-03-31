import {
   GetPlaylistDetailsResponseType,
   GetAlbumDetailsResponseType,
   GetCategoryPlaylistsResponseType,
   IdCountryRequestType,
   GetYourMusicResponseType,
   GetUserPlaylistsResponseType
} from '../../stores/types'

import {
   GetNewReleasesResponseType,
   CountryRequestType,
   IdRequestType
} from '../../stores/types'

interface NewReleaseService {
   getNewReleases(
      requestObject: CountryRequestType
   ): Promise<GetNewReleasesResponseType>

   getAlbumDetails(
      requestObject: IdRequestType
   ): Promise<GetAlbumDetailsResponseType>
}

export default NewReleaseService
