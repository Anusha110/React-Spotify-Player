import { PlaylistItemType, ImageType } from '../../types'
import ImageModel from '../ImageModel'
import SpotifyItemModel from '../SpotifyItemModel'

class PlaylistItemModel extends SpotifyItemModel {
   images: ImageType[]
   totalTracks: number

   constructor(categoryPlaylistItem: PlaylistItemType) {
      super(categoryPlaylistItem)

      const { images, tracks } = categoryPlaylistItem
      this.images = images.map(eachImage => new ImageModel(eachImage))
      this.totalTracks = tracks.total
   }
}

export default PlaylistItemModel
