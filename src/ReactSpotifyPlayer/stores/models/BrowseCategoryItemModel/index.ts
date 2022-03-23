import { BrowseCategoryItemType, ImageType } from '../../typesv2'
import ImageModel from '../ImageModel'
import SpotifyItemModel from '../SpotifyItemModel'

class BrowseCategoryItemModel extends SpotifyItemModel {
   images: ImageType[]

   constructor(category: BrowseCategoryItemType) {
      super(category)

      const { icons } = category
      this.images = icons.map(eachIcon => new ImageModel(eachIcon))
   }
}

export default BrowseCategoryItemModel
