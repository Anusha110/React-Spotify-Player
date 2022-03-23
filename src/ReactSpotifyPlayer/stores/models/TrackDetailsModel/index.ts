import { getMinuteSecondFormat } from '../../../../Common/utils/TimeUtils'
import { ArtistType, FormattedAlbumType, TrackDetailsType } from '../../typesv2'
import AlbumModel from '../AlbumModel'
import ArtistModel from '../ArtistModel'
import SpotifyItemModel from '../SpotifyItemModel'

class TrackDetailsModel extends SpotifyItemModel {
   artists: ArtistType[]
   durationMs: string
   previewUrl: string
   trackNumber: number
   album: FormattedAlbumType

   constructor(trackDetailsInfo: TrackDetailsType) {
      super(trackDetailsInfo)
      const {
         artists,
         duration_ms,
         preview_url,
         track_number,
         album
      } = trackDetailsInfo

      this.durationMs = getMinuteSecondFormat(duration_ms)
      this.previewUrl = preview_url
      this.trackNumber = track_number
      this.artists = artists.map(eachArtist => new ArtistModel(eachArtist))
      this.album = new AlbumModel(album)
   }
}

export default TrackDetailsModel
