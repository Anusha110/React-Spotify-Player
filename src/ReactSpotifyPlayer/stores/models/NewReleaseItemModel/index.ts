import { ImageType, NewReleaseItemType } from '../../typesv2'
import ImageModel from '../ImageModel'
import SpotifyItemModel from '../SpotifyItemModel'

class NewReleaseItemModel extends SpotifyItemModel {
   images: ImageType[]

   constructor(releaseItem: NewReleaseItemType) {
      super(releaseItem)

      const { images } = releaseItem
      this.images = images.map(eachImage => new ImageModel(eachImage))
   }
}

export default NewReleaseItemModel
