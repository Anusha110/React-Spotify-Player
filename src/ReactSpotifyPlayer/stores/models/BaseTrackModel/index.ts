import { getMinuteSecondFormat } from '../../../../Common/utils/TimeUtils'
import { BaseTrackType } from '../../types'

class BaseTrackModel {
   id: string
   name: string
   previewUrl: string
   duration: string
   // artists: ArtistType[]
   // album: FormattedAlbumType

   constructor(track: BaseTrackType) {
      const { id, name, preview_url, duration_ms } = track

      this.id = id
      this.name = name
      this.previewUrl = preview_url
      this.duration = getMinuteSecondFormat(duration_ms)
   }
}

export default BaseTrackModel
