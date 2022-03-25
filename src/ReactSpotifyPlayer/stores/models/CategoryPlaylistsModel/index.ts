import {
   FormattedPlaylistItemType,
   GetCategoryPlaylistsResponseType
} from '../../types'
import PlaylistItemModel from '../PlaylistItemModel'

class CategoryPlaylistsModel {
   playlists: FormattedPlaylistItemType[]

   constructor(category: GetCategoryPlaylistsResponseType) {
      const { playlists } = category
      this.playlists = playlists.items.map(
         eachPlaylist => new PlaylistItemModel(eachPlaylist)
      )
   }
}

export default CategoryPlaylistsModel
