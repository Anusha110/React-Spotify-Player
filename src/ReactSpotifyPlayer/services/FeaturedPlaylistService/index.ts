import { GetPlaylistDetailsResponseType } from '../../stores/types'

import {
   GetFeaturedPlaylistsRequestType,
   GetFeaturedPlaylistsResponseType,
   IdRequestType
} from '../../stores/types'

interface FeaturedPlaylistService {
   getFeaturedPlaylists(
      requestObject: GetFeaturedPlaylistsRequestType
   ): Promise<GetFeaturedPlaylistsResponseType>

   getPlaylistDetails(
      requestObject: IdRequestType
   ): Promise<GetPlaylistDetailsResponseType>
}

export default FeaturedPlaylistService
