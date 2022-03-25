import ImageModel from '../ImageModel'
import { ImageType, SpotifyItemType } from '../../types'

class SpotifyItemModel {
   id: string
   name: string
   images: ImageType[]

   constructor(spotifyItem: SpotifyItemType) {
      const { id, name, images } = spotifyItem

      this.id = id
      this.name = name
      this.images = images.map(eachImage => new ImageModel(eachImage))
   }
}

export default SpotifyItemModel
