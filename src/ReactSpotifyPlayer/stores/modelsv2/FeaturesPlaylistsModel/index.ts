import {
   FormattedPlaylistsType,
   GetFeaturedPlaylistsResponseType
} from '../../typesv2'
import PlaylistsModel from '../PlaylistModel'

class FeaturedPlaylistsModel {
   message: string
   playlists: FormattedPlaylistsType

   constructor(featuredPlaylists: GetFeaturedPlaylistsResponseType) {
      const { message, playlists } = featuredPlaylists

      this.message = message
      this.playlists = new PlaylistsModel(playlists)
   }
}

export default FeaturedPlaylistsModel
