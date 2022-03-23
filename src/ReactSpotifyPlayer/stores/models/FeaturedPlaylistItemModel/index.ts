import PlaylistOwnerModel from '../PlaylistOwnerModel'
import SpotifyItemModel from '../SpotifyItemModel'
import {
   FeaturedPlaylistItemType,
   FormattedPlaylistOwnerType
} from '../../types'

class FeaturedPlaylistItemModel extends SpotifyItemModel {
   description: string
   owner: FormattedPlaylistOwnerType

   constructor(featuredPlaylist: FeaturedPlaylistItemType) {
      super(featuredPlaylist)
      const { description, owner } = featuredPlaylist

      this.description = description
      this.owner = new PlaylistOwnerModel(owner)
   }
}

export default FeaturedPlaylistItemModel
