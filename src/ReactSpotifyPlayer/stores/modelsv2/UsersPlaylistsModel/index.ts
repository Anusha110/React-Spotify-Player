import {
   FormattedPlaylistItemType,
   GetUserPlaylistsResponseType
} from '../../typesv2'
import PlaylistItemModel from '../PlaylistItemModel'

class UserPlaylistsModel {
   items: FormattedPlaylistItemType[]
   total: number

   constructor(userPlaylists: GetUserPlaylistsResponseType) {
      const { items, total } = userPlaylists
      this.items = items.map(
         eachPlaylist => new PlaylistItemModel(eachPlaylist)
      )
      this.total = total
   }
}

export default UserPlaylistsModel
