import { AlbumTrackType } from '../../types'
import BaseTrackModel from '../BaseTrackModel'

class AlbumTrackModel extends BaseTrackModel {
   popularity: number

   constructor(albumTrack: AlbumTrackType) {
      super(albumTrack)
      const { popularity } = albumTrack

      this.popularity = popularity
   }
}

export default AlbumTrackModel
