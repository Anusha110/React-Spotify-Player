import { FormattedDetailedPlaylistItemType, PlaylistsType } from '../../typesv2'
import DetailedPlaylistItemModel from '../DetailedPlaylistItemModel'

class PlaylistsModel {
   href: string
   items: FormattedDetailedPlaylistItemType[]
   limit: number
   next: null
   offset: number
   previous: null
   total: number

   constructor(playlistsInfo: PlaylistsType) {
      const {
         href,
         items,
         limit,
         next,
         offset,
         previous,
         total
      } = playlistsInfo

      this.href = href
      this.items = items.map(
         eachItem => new DetailedPlaylistItemModel(eachItem)
      )
      this.limit = limit
      this.next = next
      this.offset = offset
      this.previous = previous
      this.total = total
   }
}

export default PlaylistsModel
