import {
   FormattedPlaylistItemType,
   GetCategoryPlaylistsResponseType,
   GetUserPlaylistsResponseType
} from '../../typesv2'
import PlaylistItemModel from '../PlaylistItemModel'

class UserPlaylistsModel {
   items: FormattedPlaylistItemType[]

   constructor(userPlaylists: GetUserPlaylistsResponseType) {
      const { items } = userPlaylists
      this.items = items.map(
         eachPlaylist => new PlaylistItemModel(eachPlaylist)
      )
   }
}

export default UserPlaylistsModel
