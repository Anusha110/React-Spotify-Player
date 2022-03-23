import {
   FormattedTrackItemType,
   GetPlaylistDetailsResponseType,
   ImageType
} from '../../typesv2'
import ImageModel from '../ImageModel'
import SpotifyItemModel from '../SpotifyItemModel'
import TrackItemModel from '../TrackItemModel'

class PlaylistDetailsModel extends SpotifyItemModel {
   images: ImageType[]
   ownerDisplayName: string
   tracks: {
      items: FormattedTrackItemType[]
   }

   constructor(playlistDetails: GetPlaylistDetailsResponseType) {
      super(playlistDetails)
      const { images, owner, tracks } = playlistDetails

      this.images = images.map(eachImage => new ImageModel(eachImage))
      this.ownerDisplayName = owner.display_name
      this.tracks = {
         items: tracks.items.map(eachTrack => new TrackItemModel(eachTrack))
      }
   }
}

export default PlaylistDetailsModel
