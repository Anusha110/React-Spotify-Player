import { getMinuteSecondFormat } from '../../../../Common/utils/TimeUtils'
import {
   ArtistType,
   FormattedLikedSongAlbumType,
   LikedSongTrackType
} from '../../typesv2'
import ArtistModel from '../ArtistModel'
import ImageModel from '../ImageModel'
import LikedSongAlbumModel from '../LikedSongAlbumModel'
import SpotifyItemModel from '../SpotifyItemModel'

class LikedSongTrackModel extends SpotifyItemModel {
   album: FormattedLikedSongAlbumType
   artists: ArtistType[]
   duration: string
   previewUrl: string

   constructor(trackInfo: LikedSongTrackType) {
      super(trackInfo)

      const { album, artists, duration_ms, preview_url } = trackInfo
      this.album = new LikedSongAlbumModel(album)
      this.artists = artists.map(eachArtist => new ArtistModel(eachArtist))
      this.duration = getMinuteSecondFormat(duration_ms)
      this.previewUrl = preview_url
   }
}

export default LikedSongTrackModel
