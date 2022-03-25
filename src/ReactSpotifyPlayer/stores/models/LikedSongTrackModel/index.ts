import { getMinuteSecondFormat } from '../../../../Common/utils/TimeUtils'
import {
   ArtistType,
   FormattedLikedSongAlbumType,
   LikedSongTrackType
} from '../../types'
import ArtistModel from '../ArtistModel'
import ImageModel from '../ImageModel'
import LikedSongAlbumModel from '../LikedSongAlbumModel'
import SpotifyItemModel from '../SpotifyItemModel'

class LikedSongTrackModel {
   id: string
   name: string
   album: FormattedLikedSongAlbumType
   artists: ArtistType[]
   duration: string
   previewUrl: string

   constructor(trackInfo: LikedSongTrackType) {
      const { id, name, album, artists, duration_ms, preview_url } = trackInfo
      this.id = id
      this.name = name
      this.album = new LikedSongAlbumModel(album)
      this.artists = artists.map(eachArtist => new ArtistModel(eachArtist))
      this.duration = getMinuteSecondFormat(duration_ms)
      this.previewUrl = preview_url
   }
}

export default LikedSongTrackModel
