import { getDateTimeAgo } from '../../../../Common/utils/TimeUtils'
import { FormattedTrackDetailsType, TrackItemType } from '../../types'
import TrackDetailsModel from '../TrackDetailsModel'

class TrackItemModel {
   addedAt: string
   track: FormattedTrackDetailsType

   constructor(trackItemInfo: TrackItemType) {
      const { added_at, track } = trackItemInfo

      this.addedAt = getDateTimeAgo(added_at)
      this.track = new TrackDetailsModel(track)
   }
}

export default TrackItemModel
