import { getMinuteSecondFormat } from '../../../../Common/utils/TimeUtils'
import { AlbumTrackType } from '../../typesv2'

class AlbumTrackModel {
   id: string
   name: string
   previewUrl: string
   duration: string
   popularity: number

   constructor(albumTrack: AlbumTrackType) {
      const { id, name, preview_url, duration_ms, popularity } = albumTrack

      this.id = id
      this.name = name
      this.previewUrl = preview_url
      this.duration = getMinuteSecondFormat(duration_ms)
      this.popularity = popularity
   }
}

export default AlbumTrackModel
