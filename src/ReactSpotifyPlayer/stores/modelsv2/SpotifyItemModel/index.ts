import { SpotifyItemType } from '../../typesv2'

class SpotifyItemModel {
   id: string
   name: string

   constructor(spotifyItem: SpotifyItemType) {
      const { id, name } = spotifyItem

      this.id = id
      this.name = name
   }
}

export default SpotifyItemModel
