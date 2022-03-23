import {
   FormattedLikedSongTrackType,
   GetYourMusicResponseType
} from '../../typesv2'
import LikedSongTrackModel from '../LikedSongTrackModel'

class YourMusicModel {
   tracks: FormattedLikedSongTrackType[]

   constructor(yourMusicInfo: GetYourMusicResponseType) {
      const { items } = yourMusicInfo
      this.tracks = items.map(
         eachItem => new LikedSongTrackModel(eachItem.track)
      )
   }
}

export default YourMusicModel
