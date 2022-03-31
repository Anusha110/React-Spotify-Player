import { ArtistType, FormattedAlbumType, TrackDetailsType } from '../../types'
import AlbumModel from '../AlbumModel'
import ArtistModel from '../ArtistModel'
import BaseTrackModel from '../BaseTrackModel'

class TrackDetailsModel extends BaseTrackModel {
   trackNumber: number
   artists: ArtistType[]
   album: FormattedAlbumType

   constructor(trackDetailsInfo: TrackDetailsType) {
      super(trackDetailsInfo)
      const { track_number, artists, album } = trackDetailsInfo

      this.trackNumber = track_number
      this.artists = artists.map(eachArtist => new ArtistModel(eachArtist))
      this.album = new AlbumModel(album)
   }
}

export default TrackDetailsModel
