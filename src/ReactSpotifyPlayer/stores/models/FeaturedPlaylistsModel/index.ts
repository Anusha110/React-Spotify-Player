import {
   FormattedFeaturedPlaylistType,
   GetFeaturedPlaylistsResponseType
} from '../../types'
import FeaturedPlaylistItemModel from '../FeaturedPlaylistItemModel'

class FeaturedPlaylistsModel {
   message: string
   playlists: FormattedFeaturedPlaylistType[]

   constructor(featuredPlaylist: GetFeaturedPlaylistsResponseType) {
      const { message, playlists } = featuredPlaylist

      this.message = message
      this.playlists = playlists.items.map(
         eachPlaylist => new FeaturedPlaylistItemModel(eachPlaylist)
      )
   }
}

export default FeaturedPlaylistsModel
