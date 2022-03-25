import { getMinuteSecondFormat } from '../../../../Common/utils/TimeUtils'
import { ArtistType, FormattedAlbumType, TrackDetailsType } from '../../types'
import AlbumModel from '../AlbumModel'
import ArtistModel from '../ArtistModel'

class TrackDetailsModel {
   id: string
   name: string
   artists: ArtistType[]
   durationMs: string
   previewUrl: string
   trackNumber: number
   album: FormattedAlbumType

   constructor(trackDetailsInfo: TrackDetailsType) {
      const {
         id,
         name,
         artists,
         duration_ms,
         preview_url,
         track_number,
         album
      } = trackDetailsInfo

      this.id = id
      this.name = name
      this.durationMs = getMinuteSecondFormat(duration_ms)
      this.previewUrl = preview_url
      this.trackNumber = track_number
      this.artists = artists.map(eachArtist => new ArtistModel(eachArtist))
      this.album = new AlbumModel(album)
   }
}

export default TrackDetailsModel
